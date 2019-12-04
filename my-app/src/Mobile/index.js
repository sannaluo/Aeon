import React, {Component} from 'react';
import './Mobile.css';
import StepZilla from "react-stepzilla";
import OverlayMenu from 'react-overlay-menu';
//import { FirebaseDatabaseProvider } from "@react-firebase/database";


class Menu extends Component {
    /**
     constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

     showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
    });
    }

     closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
        });

        }
    }*/
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    /**
     render() {
        return (
            <div className="MenuContainer">
            <h1 id="logo" >AEON</h1>
            <button id="Menu" onClick={this.showMenu}>
            &#9776;
    </button>
        {
            this.state.showMenu
                ? (
                <div
                className="menu"
            ref={(element) => {
            this.dropdownMenu = element;
        }}>
        <div>
        <button> Menu item 1 </button>
        <button> Menu item 2 </button>
        <button> Menu item 3 </button>
        </div>
        </div>
        )
        : (
            null
        )
        }
    </div>
    );
    }
     }*/

    render() {
        return (
            <div className="MenuContainer">
            <h1 id="logo" >AEON</h1>
            <button id="Menu"  type="button" onClick={this.toggleMenu}>&#9776;</button>
        <OverlayMenu
        open={this.state.isOpen}
        onClose={this.toggleMenu}
            >
            <div className="MenuContent">
            <h1>Menu</h1>
            <button> Scoreboard </button> <br/>
            <button> info </button> <br/>
            <button> News </button>
            </div>
            </OverlayMenu>
            </div>
    );
    }
}
/**2.21 css
 export default class Progress extends React.component {
    render () {
        return (
<track> </track>
        )
    }
}*/

class MobilePage extends Component {

    state = {
        text: 'Next'
    }
    changeText = () => {
    this.setState({text: 'Jee'});
}


constructor(props){
    super(props)
    this.state = {
        button: true
    }
    this.handleClick = this.handleClick.bind(this);
}

handleClick(){
    this.setState({
        button:!this.state.button
    });

}
render() {
    const { text } = this.state
    return (
        <div id="challengeBox">
        <h4 id="challengeHeader">Today's challenge:</h4>
    <h3>Eat all of your lunch: no food to waste!</h3>
    <button id="button" className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>Did you do it?</button>
    </div>
);
}
}

const quizQuestions = ["Which isn’t a renewable energy?",
    "Where is most of the drinking water coming from in Finland?",
    "Which way of travelling produces the most pollution?",
    "Which element has most concentration in the air? ",
    "How many percentages of Finland are covered with forest? ",
    "Which element is ozone? ",
    "What is a fertilizer for? "];

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
    ],
    [
        ["Nitrogen", true],
        ["Oxygen", false],
        ["Hydrogen", false]
    ],
    [
        ["about 57-62 %", false],
        ["about 75-80 %", true],
        ["about 64-69 %", false]
    ],
    [
        ["O3", true],
        ["N2OH", false],
        ["NH4", false]
    ],
    [
        ["food ingredient", false],
        ["plant growing", true],
        ["animal medicine", false]
    ]
];

function randomQuestion() {
    let number = Math.floor(Math.random() * 7);
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


// Step1
class First extends Component {
    constructor(props){
        super(props);
        this.state = {question: "",
            answers: []}
    }

    handleClick = () => {
    console.log('moi', this.state.answers);
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
        <div id="Questions">
        <div className="QuizBox">
        <h3>{this.state.question}</h3>
        <ul className="Answers">
        <li onClick={this.handleClick}>
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

//Step2
class Second extends Component {
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
            <div id="Questions">
            <div className="QuizBox">
            <h3>{this.state.question}</h3>
            <ul className="Answers">
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

//Step3
class Third extends Component {
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
            <div id="Questions">
            <div className="QuizBox">
            <h3>{this.state.question}</h3>
            <ul className="Answers">
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

//Step4
class Fourth extends Component {
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
            <div id="Questions">
            <div className="QuizBox">
            <h3>{this.state.question}</h3>
            <ul className="Answers">
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

//Step5
class Fifth extends Component {
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
            <div id="Questions">
            <div className="QuizBox">
            <h3>{this.state.question}</h3>
            <ul className="Answers">
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

const steps =
    [{name: '', component: <First/>},
{name: '', component: <Second/>},
{name: '', component: <Third/>},
{name: '', component: <Fourth/>},
{name: '', component: <Fifth/>}];

class QuizPage extends Component {

    render() {
        return (
            < div
        className = 'step-progress' >
            <StepZilla steps={steps} nextButtonCls={"nextButton"} backButtonCls={"backButton"} showNavigation={true} stepsNavigation={false} prevBtnOnLastStep={false} />
        < /div>
    )
    }
}

function Mobile() {
    return (
        <div className="App">
        <Menu/>
        <MobilePage/>
        <h2>Question of the day:</h2>
    <div class="content">
        <QuizPage/>
        </div>
        </div>
);
}

export default Mobile;
