import React from "react";
import "../App.css";
const Stats = () => {
  return (
    // streak
    <div id="stats" >
      <div className="statsindiv">
        <a href="https://github.com/jhaaman1">
          <img
            alt="aman"
            // align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=jhaaman1"
          />
        </a>
      </div>
      <div>
        
        <a href="https://github.com/jhaaman1">
          <img
          alt=""
            // align="left"
            src="https://github-readme-stats.vercel.app/api?username=jhaaman1&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};
export default Stats;