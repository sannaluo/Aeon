import React, {Component} from 'react';
import './Web.css';
import {
    BarChart, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  PieChart, Pie, Sector
} from 'recharts';


import placeholderImage from '../images/gray-bridge-and-trees-814499.jpg';
import infoImage1 from '../images/person-s-left-hand-holding-green-leaf-plant-886521.jpg';
import infoImage2 from '../images/helsinki_tunnus_valkoinen-1.png';
import infoImage3 from '../images/photo-of-plastic-bottles-2547565.jpg';

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
            name: '01.12.', average: 4000, ours: 2400, amt: 2400,
        },
        {
            name: '02.12.', average: 3000, ours: 1398, amt: 2210,
        },
        {
            name: '03.12.', average: 2000, ours: 9800, amt: 2290,
        },
        {
            name: '04.12.', average: 2780, ours: 3908, amt: 2000,
        },
        {
            name: '05.12.', average: 1890, ours: 4800, amt: 2181,
        },
        {
            name: '06.12.', average: 2390, ours: 3800, amt: 2500,
        },
        {
            name: '07.12.', average: 3490, ours: 4300, amt: 2100,
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
                width={1000}
                height={400}
                data={this.props.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="white"/>
                <XAxis dataKey="name" stroke="white"/>
                <YAxis stroke="white"/>
                <Legend/>
                <Line type="linear" dataKey="average" stroke="#415A77" dot={false} strokeWidth={5}/>
                <Line type="linear" dataKey="ours" stroke="#E9C46A" dot={false} strokeWidth={5}/>
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
            <div id="mainPageContents">
                <div>
                    <h2 className="chartHeadlineText">Which school has the most correct answers?</h2>
                    <DailyChart data={this.state.data}/>
                </div>
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
        );
    }
}


const quizQuestions = ["Which isn’t a renewable energy?", "Where is most of the drinking water coming from in Finland?", "Which way of travelling produces the most pollution?"];
const quizAnswers = [
        [
            ["Solar energy.", false],
            ["Coal energy.", true],
            ["Water energy.", false]
        ],
        [
            ["Out of rivers and lakes.", true],
            ["Rain water.", false],
            ["Aquifers.", false]
        ],
        [
            ["By bus.", false],
            ["By car.", false],
            ["By plane.", true]
        ]
    ];


function randomQuestion() {
    let number = Math.floor(Math.random() * 3);
    return number;
}

let oldNumber;

function getQuiz(type, number) {

    if(type === "question"){
        oldNumber = number;
        return quizQuestions [number];
    }

    if (type === "answer") {
        oldNumber = number;
        return quizAnswers [number];
    }

    if (type === "previousQuestion") {
        return quizQuestions [oldNumber];
    }

    if(type === "rightAnswers") {
        return quizAnswers [oldNumber];
    }

    return "Could not retrieve questions. :(";
}

/**
 * The second or pop quiz page.
 */
class PopQuizPage extends Component {
    constructor(props){
        super(props);
        this.state = {question: "",
        answers: []}
    }

    componentDidMount() {
        let number = randomQuestion();
        let question = getQuiz("question", number);
        this.setState({question: question});

        let answers = getQuiz("answer", number);
        this.setState({answers: answers});
        console.log(answers);

        console.log(number)
       // oldNumber = number;
    }

    render() {
        return (
            <div id="popQuizPageContents">
                <h2 className="popHeadlineText">Pop Quiz!</h2>
                <div className="popQuizBox">
                    <h3>{this.state.question}</h3>
                    <ul className="popQuizAnswers">
                        <li>
                            a) {this.state.answers[0]}
                        </li>
                        <li>
                            b) {this.state.answers[1]}
                        </li>
                        <li>
                            c) {this.state.answers[2]}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

/**
 * The third or pop quiz answers page.
 */
class PopQuizAnswersPage extends Component {

    constructor(props){
        super(props);
        this.state = {question: "",
            answers: []}
    }

    changeColor(answers) {

        if(answers[0][1] === true) {
            const el = document.getElementsByClassName("answer")[0];
            el.style.border = "2px solid #49B788";
            console.log(answers[0][1]);
        }
        if(answers[1][1] === true) {
            const el = document.getElementsByClassName("answer")[1];
            el.style.border = "2px solid #49B788";
            console.log(answers[1][1]);
        }
        if(answers[2][1] === true) {
            const el = document.getElementsByClassName("answer")[2];
            el.style.border = "2px solid #49B788";
            console.log(answers[2][1]);
        }
    }

    componentDidMount() {
        let number = oldNumber;
        let question = getQuiz("question", number);
        this.setState({question: question});

        let answers = getQuiz("answer", number);
        this.setState({answers: answers});
        //console.log(answers[0][1]);
       // console.log(answers);
        this.changeColor(answers);
    }



    render() {
        return (
            <div id="popQuizAnswerPageContents">
                <h2 className="popHeadlineText">Pop Quiz!</h2>
                <div className="popQuizBox">
                    <h3>{this.state.question}</h3>
                    <ul className="popQuizAnswers">
                        <li className="answer">
                            a) {this.state.answers[0]}
                        </li>
                        <li className="answer">
                            b) {this.state.answers[1]}
                        </li>
                        <li className="answer">
                            c) {this.state.answers[2]}
                        </li>
                    </ul>
                </div>
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
            <div id="graphContainer">
                <h2 className="chartHeadlineText">Our energy consumption:</h2>
                <EnergyChart data={this.state.data}/>
            </div>
        );
    }
}



const infoArray = ["\"Sustainability is concerned with assuming that nature and the environment are not an inexhaustible resource and so, it is necessary to protect them and use them rationally.\"",
    "\"The City of Helsinki works continuously to be a model city of smart and sustainable development. Helsinki is committed to promoting green values in all its operations and hopes that they are taken into consideration in all events and activities organised within the city.\"",
    "\"Plastic is a material made to last forever, yet 33 percent of all plastic - water bottles, bags and straws - are used just once and thrown away. Plastic cannot biodegrade; it breaks down into smaller and smaller pieces.\""];
const infoImageArray = [infoImage1, infoImage2, infoImage3];

let oldNumberInfo = "";
let number = 0;

function getInfo(type) {
    let returnable = infoArray[number];
    /*
    console.log(oldNumber);
    let number = randomQuestion();
    let returnable = infoArray[number];
    oldNumberInfo = number;

    console.log("tämä " + number);
    console.log(returnable);
    */

    if(type === "image") {
        returnable = infoImageArray[number];
        console.log("tämä " + number);
        number++;

        if(number === 3) {
            number = 0;
        }
        return returnable;
    }
    console.log("tämä " + number);

    return returnable;

}

/**
 * The fifth or info page.
 */
class InfoPage extends Component {
    constructor(props){
        super(props);
        this.state = {data: "", img: ""}
    }

    componentDidMount() {
        let data = getInfo();
        console.log(data);
        this.setState({data: data});

        let imgSource = getInfo("image");
        console.log(imgSource);
        this.setState({img: imgSource});

        const el = document.getElementById("infoPageBox");
        // el.style.backgroundImage = "url("imgSource")";

    }


    render() {
        return (
            <div id="infoPageContents">
                <h2 className="popHeadlineText">Did you know?</h2>
                <div id="infoPageBox">
                    <p>{this.state.data}</p>
                    <img id="infoPageImg" src={this.state.img}/>
                </div>
            </div>
        );
    }
}



class Header extends Component {
    render() {
        return (
            <header id="mainHeader">
                <div id="headlines">
                    <h1 id="mySchoolHeadline">Mika Häkkinen school </h1>
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
                    Go to web.aeon.com to start playing!
                </p>
            </footer>
        );
    }
}


function ChangeBackgroundColour(page) {
   // const page = page;
    const targetEl = document.getElementsByClassName("App")[0];
    const headlines = document.getElementById("headlines");
    const rivalHeadline = document.getElementById("rivalSchoolHeadline");

    console.log(page);
    console.log(targetEl);

    if(targetEl) {
        switch (page) {
            case 1: {
                targetEl.style.background = "linear-gradient(90deg, #E9C46A 0%, #F4A261 100%)";
                headlines.style.color = "#264653";
                rivalHeadline.style.color = "#264653";
            }
                break;
            case 2: {
                targetEl.style.background = "linear-gradient(90deg, #415A77 0%, #49B788 100%)";
                headlines.style.color = "#E9C46A";
                rivalHeadline.style.color = "transparent";
            }
                break;
            case 3: {
                targetEl.style.background = "linear-gradient(90deg, #E9C46A 0%, #F4A261 100%)";
                headlines.style.color = "#264653";
            }
                break;
            case 4: {
                targetEl.style.background = "linear-gradient(90deg, #415A77 0%, #49B788 100%)";
                headlines.style.color = "#E9C46A";
            }
                break;
            case 5: {
                targetEl.style.background = "linear-gradient(90deg, #E9C46A 0%, #F4A261 100%)";
                headlines.style.color = "#264653";
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
    let page = props.page;
    /*
    if(page === 2){
        return <MainPage/>;
    }
    */

    /* checking if the page is being set manually from hidden navigation
    if(manualPageSwitch !== 0) {
        console.log(manualPageSwitch);
        page = manualPageSwitch;
        manualPageSwitch = 0;
    }
    */

    ChangeBackgroundColour(page);

   // return <GraphPage/>

    switch(page) {
        case 1: return <MainPage/>;
        case 2: return <PopQuizPage/>;
        case 3: return <PopQuizAnswersPage/>;
        case 4: return <GraphPage/>;
        case 5: return <InfoPage/>;
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
            10000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // change the page with a hidden navigation
    manualSwitch(number) {
        clearInterval(this.timerID);
        this.setState({
            page: number
        });
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

    handleClick(number, e) {
        e.preventDefault();
        ChangeBackgroundColour(number);
        this.manualSwitch(number);
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
                <ul id="manualPageNav">
                    <li onClick={(e) => this.handleClick(1, e)}>1</li>
                    <li onClick={(e) => this.handleClick(2, e)}>2</li>
                    <li onClick={(e) => this.handleClick(3, e)}>3</li>
                    <li onClick={(e) => this.handleClick(4, e)}>4</li>
                    <li onClick={(e) => this.handleClick(5, e)}>5</li>
                </ul>
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