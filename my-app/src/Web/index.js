import React, {Component} from 'react';
import './Web.css';



/**
 * The first or main page.
 */
class MainPage extends Component {

    render() {
        return (
            <div>
                <h4>
                    Main page is here.
                </h4>
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
    render() {
        return (
            <div>
                <h4>
                    Energy graph page is here.
                </h4>
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
            3000
        );
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

                <h1>Hello, world!</h1>
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