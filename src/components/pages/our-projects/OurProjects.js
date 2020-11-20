import React, { Component } from 'react';
import Graph from './Graph.js';
import './OurProjects.css';
import {Link} from "react-router-dom";

class OurProjects extends Component {

    render() {
        return (
            <main className="text-center">
                <h1>Our Projects</h1>
                <img src="https://i.ibb.co/vQYCSGg/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg" alt="People working at a desk." height="300px"></img>
                <div>
                    <div>
                        <h2>How We're Making a Difference</h2>
                        <p id="project-info">Information about specific Projects.  This is our project. Checkout it out. I am waiting
                            for information to fill in about  projects.  Coming Soon.
                        </p>
                    </div>
                    <div id="graph-container">
                        <div id="graph"><Graph /></div>
                    </div>
                    <div className="impact-div">
                        <p>Eventually this won't be the same button as donate:</p>
                        {/* Button help from: https://dev.to/webdeasy/top-20-css-buttons-animations-f41 */}
                        <Link to="/donate#see-impact"><Button text="See the Impact" link='../donate/donate.html#see-impact'/></Link>
                    </div>
                    <div className="donate-div">
                        {/* Button help from: https://dev.to/webdeasy/top-20-css-buttons-animations-f41 */}
                        <Link to="/donate"><Button text="Donate Now" link='../donate/donate.html'/></Link>
                    </div>
                </div>
            </main>
        );
    }
}

class Button extends Component {
    handleClick(event) {
        console.log('You clicked on "', this.props.text, '"');
        window.location.href=this.props.link;
    }

    render() {
        return (
            <button className="donate-btn" type="button" onClick={(evt) => this.handleClick(evt) }>
                {this.props.text}
            </button>
        )
    }
}

export default OurProjects
