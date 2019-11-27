import React, {Component} from 'react';
import './Mobile.css';


class Menu extends Component {
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
    }

    render() {
        return (
            <div>
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
}

class MobilePage extends Component {

    state = {
        text: "Next"
    }

    changeText = (text) => {

    this.setState({ text });
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
    })
}
render() {
    const { text } = this.state
    return (
        <div id="challengeBox">
        <h4 id="challengeHeader">Today's challenge:</h4>
    <h4>Eat all of your lunch: no food to waste!</h4>
    <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>Did you do it?</button>
    </div>
);
}
}


const quizQuestions = ["Which isn’t a renewable energy?",
    "Where is most of the drinking water coming from in Finland?",
    "Which way of travelling produces the most pollution?"];

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

class QuizPage extends Component {
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


function Mobile() {
    return (
        <div className="App">
        <Menu/>
        <MobilePage/>
        <h2>Question of the day:</h2>
    <div class="content">
        <div id="Questions">
        <a>1</a>
        <a>2</a>
        <a>3</a>
        <a>4</a>
        <a>5</a>
        </div>
        <QuizPage/>
        </div>
        </div>
);
}

export default Mobile;
