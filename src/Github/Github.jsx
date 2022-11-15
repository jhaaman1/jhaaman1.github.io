import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";


const GitHub = () => {
  return (
    <div className="github" >         
        <GitHubCalendar
          username="jhaaman1"
        />
        
    </div>
  );
};
export default GitHub;