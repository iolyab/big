import React from 'react';
import imagea from '../images/Mario and Adrian A.jpg';

const About = () => {
    return(
       <section className="about-section">
        <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
         <div className="about-img">
                <img src={imagea} alt=''/>
        </div>
       </section>
    )
}

export default About;