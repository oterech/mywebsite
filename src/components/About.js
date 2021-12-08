import React from "react";
import me from "../assets/me.png"

const About = () => (
  <div className="pt-1 mx-5">
    <div className="fs-5 mt-5 text-start mx-5">
<p className="fs-5 fade-inHey"><b>hey there!</b> my name is</p><p id="myname" className="display-2 mx-5 text-start fade-inName"> phoebe,</p> 
      <p className="display-3 fade-inTitle">and i'm a: </p>
      <div className="fade-inInfo mx-auto mt-5 p-5">
      <p>Full Stack <b className="purple">Web</b> + <b className="purple">Mobile</b> Engineer,</p>
      <p><b id="a">who recently finished a full time immersive Software Development Bootcamp:</b> <b id="gh"><a className="gh" href="https://www.gracehopper.com/curriculum">Grace Hopper @ Fullstack Academy</a></b>, in July 2021.</p>
      <p><b id="a">now</b> I'm currently based in Philly, but I love to travel, and I'm open to remote & freelance work.</p>
      <p>Contact me, let's <b className="purple">connect</b>!</p>
      </div>
    </div>
  </div>
);

export default About;


// When I'm not coding, I love hanging out with my dog Lola, cooking, baking,
// playing scrabble, and listening to true crime podcasts.

// Before becoming a software engineer I worked for five years in the non
// profit sphere, doing fundraising, grant writing, and other development
// activities for colleges, a private high school, and a federally funded
// medical clinic.