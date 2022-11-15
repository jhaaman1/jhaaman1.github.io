import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";


const GitHub = () => {
  return (
    <div className="github" >
      <div >
            <div className="mt-20">
        <GitHubCalendar
          username="jhaaman1"
        />
        </div>
        </div>
    </div>
  );
};
export default GitHub;