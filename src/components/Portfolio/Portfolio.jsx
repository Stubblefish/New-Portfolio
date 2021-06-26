import React from "react";
import SFEats from "../../../src/Eats-on-wheels.jpg";
import Vibe from "../../../src/Vibe.jpg"

const Portfolio = () => {
    return (
    
    <div className="Portfolio-box">
        <div className="Portfolio">
            <div className="Projects-Title">
                <h3>Projects</h3>
            </div>
        
            <div className="Projects">
                <div className="SFEats">
                <img className="SFEats-img" src={SFEats} width="150" height="200"></img>
                <div className="SFEats-text">This application allows users to search food trucks in San Francisco, California. Key features of this application allow the ability to save favorites on trucks and functionality that allows the App to help YOU make a decision!</div>
                </div>
                <div className="Vibe">
                <img className="Vibe-img" src={Vibe} width="200" height="200"></img>
                <div className="Vibe-text">Vibe is an application that allows individuals to priotitize their mental well being, by serving as both a journal and a mood tracker. Key technologies used include MYSQL, Express, Javascript and MaterialUI.</div>
                </div>
            </div>
        </div>
    </div>
    )}

export default Portfolio