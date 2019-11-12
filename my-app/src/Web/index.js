import React, {Component} from 'react';
import './Web.css';
import {
    BarChart, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  PieChart, Pie, Sector
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
                width={1000}
                height={500}
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
 * Pie chart variables for previous day's challenge. From recharts.
 *
 */

/**
 * Data of the pie chart.
 * @type {*[]}
 */
const pieChartData = [
    { name: 'My school', value: 33 },
    { name: 'Rival school', value: 12 }
];

/**
 * Colours of the pie chart.
 * @type {string[]}
 */
const COLORS = ['#49B788', '#415A77'];

/**
 * Some calculations ?? for making a customized chart, from recharts.
 * @type {number}
 */
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
                                   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
                               }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

/**
 * Returns a pie chart.
 */
class DailyPieChart extends Component {

    render() {
        return (
            <PieChart width={200} height={200}>
                <Pie
                    data={pieChartData}
                    cx={100}
                    cy={100}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#415A77"
                    dataKey="value"
                >
                    {
                        pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
            </PieChart>
        );
    }
}


/**
 * The first or main page.
 */
class MainPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: "",
            pieData:"",
            pieColours: [],
            totalAmount: "45",
            mySchoolAmount: "33",
            rivalSchoolAmount: "12"
        }
    }

    componentDidMount() {
        let data = DailyChartData();
        console.log(data);
        this.setState({data: data});

       /* let pieData = PieChartData();
        this.setState({pieData : pieData});

        let pieColours = PieChartColours();
        this.setState({pieColours : pieColours});
        */
    }
/*<h4>
                    Main page is here.
                </h4>*/
    render() {
        return (
            <div>

                <div id="mainPageContents">

                    <DailyChart data={this.state.data}/>

                    <aside>
                        <div className="dailyChallengeBox">
                            <h4>Today's challenge:</h4>
                            <p>Use only one paper towel when you dry your hands!</p>
                        </div>
                        <div className="previousDailyChallengeBox">
                            <h4>Yesterday's challenge:</h4>
                            <p>Eat all of the food that you take!</p>
                            <DailyPieChart/>
                            <div>
                                <p>Total amount of participants: {this.state.totalAmount}</p>
                                <p>Mika Häkkinen school: {this.state.mySchoolAmount}</p>
                                <p>Kimi Räikkönen school: {this.state.rivalSchoolAmount}</p>
                            </div>
                        </div>
                    </aside>
                </div>
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
 * The third or pop quiz answers page.
 */
class PopQuizAnswersPage extends Component {
    render() {
        return (
            <div>
                <h4>
                    Pop quiz answers page is here.
                </h4>
            </div>
        );
    }
}

/**
 * The fourth or energy graph page.
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
 * The fifth or info page.
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


class Header extends Component {
    render() {
        return (
            <header id="mainHeader">
                <div id="headlines">
                    <h1 id="mySchoolHeadline">Mika Häkkinen school</h1>
                    <h2 id="rivalSchoolHeadline">vs Kimi Räikkönen school</h2>
                </div>

            </header>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer id="mainFooter">
                <p>
                    Go to firebase.aeon.com to start playing!
                </p>
            </footer>
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
                targetEl.style.background = "linear-gradient(90deg, #E9C46A 0%, #F4A261 100%)";
            }
                break;
            case 4: {
                targetEl.style.background = "linear-gradient(90deg, #415A77 0%, #49B788 100%)";
            }
                break;
            case 5: {
                targetEl.style.background = "linear-gradient(90deg, #E9C46A 0%, #F4A261 100%)";
            }
                break;
        }
    }
/*
    if(page === 2){
        targetEl.style.background = "linear-gradient(90deg, #415A77 0%, #49B788 100%)";
    }
    if(page === 3){
        targetEl.style.background = "background: linear-gradient(90deg, #E9C46A 0%, #F4A261 100%);";
    }
    */
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
        case 3: return <PopQuizAnswersPage/>;
        case 4: return <GraphPage/>;
        case 5:  return <InfoPage/>;
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
            500000
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
        if (currentPage === 5) {
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
    /*
                    <h1> Welcome to Aeon!</h1>
                    <h4>This page switches content every 5 seconds.</h4>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    {this.state.page}
                    */
    render() {
        return (
            <div id="mainContainer">
                <Header/>
                <div>
                    <ChangePage page={this.state.page}/>
                </div>
                <Footer/>
            </div>

        );
    }
}

/*<h1>Web</h1>*/

/**
 * The whole page.
 * @returns {*}
 * @constructor
 */
function Web() {
    return (
        <div className="App">
            <PageContent page={MainPage}/>
        </div>
    );
}

export default Web;