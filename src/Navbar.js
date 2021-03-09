import React from "react";
import "./Navbar.css";
import requests from "./requests";
import {Divider} from "@material-ui/core";
function Navbar({ setSelectedOption }) {
  return (
    <div className="navbar">
      <h5 className="topic" onClick={() => setSelectedOption()}>
        Editorial{" "}
      </h5>
      <h5 className="topic" onClick={() => setSelectedOption(null)}>
        {" "}
        Following{" "}
      </h5>
       { "  "}
       <Divider orientation="vertical" flexItem />
       { "  "}
      <h5 className="topic topic--active" onClick={() => setSelectedOption(requests.fetchNature)}> Nature </h5>
      <h5 className="topic" onClick={() => setSelectedOption(requests.fetchPeople)}> People </h5>
      <h5 className="topic" onClick={() => setSelectedOption(requests.fetchArchitecture)}> Arcitecture </h5>
      <h5 className="topic" onClick={() => setSelectedOption(requests.fetchCurrentEvents)}> Current Events</h5>
      <h5 className="topic" onClick={() => setSelectedOption(requests.fetchBusinessWork)}>
        {" "}
        Business & Work{" "}
      </h5>
      <h5 className="topic" onClick={() => setSelectedOption(requests.fetchFashion)}> Fashion</h5>
      <h5 className="topic" onClick={() => setSelectedOption(requests.fetchHealthWellness)}> Health & Wellness</h5>
      <h5 className="topic" onClick={() => setSelectedOption(requests.fetchExperimental)}>
        {" "}
        Experimental
      </h5>
      <h5 className="topic" onClick={() => setSelectedOption(requests.fetchFilm)}> Film </h5>
    </div>
  );
}

export default Navbar;
