import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import './Landing.css';

function Landing () {
    return (
        <div>
        <h1>Landing</h1>
        <button>
            <Link to={ROUTES.WEB}><h3>Web</h3></Link>
        </button>
        <button>
            <Link to={ROUTES.MOBILE}><h3>Mobile</h3></Link>
        </button>
        </div>
    );
}

export default Landing;