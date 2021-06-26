import React from "react";
import Headshot from "../../../src/Headshot.jpg"

const Bio = () => {
    return <div className="bio-box">
        <div className="George">
        <h3>About Myself</h3>
            <div className="George-bio">
                
                <img className="Headshot" src={Headshot} width="200" height="200"></img>
                
                <div>
                Very few people incapsulate the phrase "jack-of-all-trades" like I do. Ive volunteered around the globe, became a certified massage practitioner, apprenticed as a blacksmith,
              waited tables, sold artwork to fortune 500 owners, planned events that hosted thousands, worked with my local community to encourage music education for children... and all while under 30!
              
              As a Web Development professional, my goal is to help create interesting and meaningful products to help as many communites as possible. 
            
              When not working, I can be found hiking with my dogs, playing music or enjoying life with my family and friends!
                </div>
            </div>
        </div>
    </div>
}

export default Bio