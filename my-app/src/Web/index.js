import React, {Component} from 'react';
import './Web.css';
import {
    BarChart, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


/**
 * Set the data for daily questions chart. School1 is "my school".
 * @returns {*[]}
 * @constructor
 */
export function DailyChartData() {

    const data = [
        {
            name: 'Q 1', school1: 2, school2: 8,
        },
        {
            name: 'Q 2', school1: 5, school2: 5,
        },
        {
            name: 'Q 3', school1: 6, school2: 4,
        },
        {
            name: 'Q 4', school1: 6, school2: 4,
        }
    ];

    return (
       data
    );
}

/**
 * Returns a bar chart. Takes the data in props.data.
 */
class DailyChart extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <BarChart
                width={500}
                height={300}
                data={this.props.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#666666"/>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="school1" fill="#49B788" barSize={30}/> /*my school*/
                <Bar dataKey="school2" fill="#415A77" barSize={15}/> /*rivalry school*/
            </BarChart>
        );
    }
}


// TODO: data
/**
 * Set the data for energy chart.
 * @returns {*[]}
 * @constructor
 */
export function EnergyChartData() {

    const data = [
        {
            name: '01.11.', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: '02.11.', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: '03.11.', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: '04.11.', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: '05.11.', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: '06.11.', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: '07.11.', uv: 3490, pv: 4300, amt: 2100,
        },
    ];

    return (
        data
    );
}

/**
 * Show a line chart.
 */
class EnergyChart extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <LineChart
                width={700}
                height={300}
                data={this.props.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="white"/>
                <XAxis dataKey="name" stroke="white"/>
                <YAxis stroke="white"/>
                <Line type="linear" dataKey="pv" stroke="#F4A261" dot={false} strokeWidth={5}/>
            </LineChart>
        );
    }
}

/**
 * The first or main page.
 */
class MainPage extends Component {

    constructor(props){
        super(props);
        this.state = {data: ""}
    }

    componentDidMount() {
        let data = DailyChartData();
        console.log(data);
        this.setState({data: data});
    }

    render() {
        return (
            <div>
                <h4>
                    Main page is here.
                </h4>
                <DailyChart data={this.state.data}/>
            </div>
        );
    }
}

/**
 * The second or pop quiz page.
 */
class PopQuizPage extends Component {
    render() {
        return (
            <div>
                <h4>
                    Pop quiz page is here.
                </h4>
            </div>
        );
    }
}

/**
 * The third or energy graph page.
 */
class GraphPage extends Component {
    constructor(props){
        super(props);
        this.state = {data: ""}
    }

    componentDidMount() {
        let data = EnergyChartData();
        console.log(data);
        this.setState({data: data});
    }
    render() {
        return (
            <div>
                <h4>
                    Energy graph page is here.
                </h4>
                <EnergyChart data={this.state.data}/>
            </div>
        );
    }
}

/**
 * The fourth or info page.
 */
class InfoPage extends Component {
    render() {
        return (
            <div>
                <h4>
                    Info page is here.
                </h4>
            </div>
        );
    }
}


function ChangeBackgroundColour(page) {
   // const page = page;
    const targetEl = document.getElementsByClassName("App")[0];

    console.log(page);
    console.log(targetEl);

    if(targetEl) {
        switch (page) {
            case 1: {
                targetEl.style.background = "linear-gradient(90deg, #E9C46A 0%, #F4A261 100%)";
            }
                break;
            case 2: {
                targetEl.style.background = "linear-gradient(90deg, #415A77 0%, #49B788 100%)";
            }
                break;
            case 3: {
                targetEl.style.background = "linear-gradient(90deg, #415A77 0%, #49B788 100%)";
            }
                break;
            case 4: {
                targetEl.style.background = "linear-gradient(90deg, #E9C46A 0%, #F4A261 100%)";
            }
                break;
        }
    }

    if(page === 2){
        targetEl.style.background = "linear-gradient(90deg, #415A77 0%, #49B788 100%)";
    }
    if(page === 3){
        targetEl.style.background = "background: linear-gradient(90deg, #E9C46A 0%, #F4A261 100%);";
    }
}

/**
 * Returns a component based on what props(number) is given.
 * @param props
 * @returns {*}
 * @constructor
 */
function ChangePage(props) {
    const page = props.page;
    /*
    if(page === 2){
        return <MainPage/>;
    }
    */
    ChangeBackgroundColour(page);

   // return <GraphPage/>

    switch(page) {
        case 1: return <MainPage/>;
        case 2: return <PopQuizPage/>;
        case 3: return <GraphPage/>;
        case 4: return <InfoPage/>;
    }

    // if props.page is somehow not 1-4
    console.log(page);
    return <div>
        <h4>Not a page.</h4>
    </div>
}

/*
TODO: how many seconds do we want to show each page? Does the pop quiz answer page need it's own page (so there is 5)?
 */

/**
 * change the content of the page every 3 seconds
 */
class PageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            page: 1,
            newPage: 1
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            5000
        );

        // TODO:
        /*
        const targetEl = document.getElementsByClassName("App")[0];
        console.log(targetEl);
        targetEl.style.background = "linear-gradient(90deg, #415A77 0%, #49B788 100%)";
        */
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let currentPage = this.state.page;
        if (currentPage === 4) {
            currentPage = 0
        }
        let newPage = currentPage +1;

        this.setState({
            date: new Date()
        });
        this.setState({
            page: newPage
        });
    }

    render() {
        return (
            <div>
                <h1>Welcome to Aeon!</h1>
                <h4>This page switches content every 5 seconds.</h4>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <div>
                    {this.state.page}
                    <ChangePage page={this.state.page}/>
                </div>
            </div>

        );
    }
}

/**
 * The whole page.
 * @returns {*}
 * @constructor
 */
function Web() {
    return (
        <div className="App">
            <h1>Web</h1>
            <PageContent page={MainPage}/>
        </div>
    );
}

export default Web;