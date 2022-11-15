import React from "react";
import "./Stats.css"


const Stats = () => {
  return (
    // streak
    <div className="stats">

      <div className="statsindiv">
            <a href="https://github.com/jhaaman1">
            <img
                alt="aman"
                className="stats_image"
                
                src="https://github-readme-streak-stats.herokuapp.com/?user=jhaaman1"
            />
            </a>
      </div>

      <div className="statsindiv">
            <a href="https://github.com/jhaaman1">
            <img
            alt=""
            className="stats_image"
                src="https://github-readme-stats.vercel.app/api?username=jhaaman1&count_private=true&show_icons=true" //stats
            />
            </a>
      </div>
    </div>
  );
};
export default Stats;