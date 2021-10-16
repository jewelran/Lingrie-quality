import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopNavBar from "../../Header/TopNavBar";
import "./QualityTeams.css";
function QualityTeams() {
  return (
    <div className="container">
     
      <div className="mainWrap">
        <div className="wrapper">
          <div className="textArea">
            <h1 style={{ textAline: "center" }}>Satisfied</h1>
            <h1>Customer</h1>
          </div>
        </div>
        <div className="menu col-md-12">
          <Link
            style={{ textDecoration: "none", fontSize:"12px" ,lineHeight:"5px" }}
            className="menu1 pt-3"
            to="/home"
          >
            <span>
              <p>Risk</p>
              <p>Analysis</p>
            </span>
          </Link>
          <Link  style={{ textDecoration: "none", fontSize:"12px" ,lineHeight:"5px" }} className="menu2 pt-3" to="/home">
            <span>
              <p>Pattern</p>
              <p>Test</p>
            </span>
          </Link>
          <Link  style={{ textDecoration: "none", fontSize:"12px" ,lineHeight:"5px" }} className="menu3 pt-3" to="/home">
            <span>
                <p>Risk</p>
              <p>Analysis</p>
            </span>
          </Link>
          <Link  style={{ textDecoration: "none", fontSize:"12px" ,lineHeight:"5px" }} className="menu4 pt-3" to="/home">
            <span>
                <p>PP</p>
              <p>Meeting</p>
            </span>
          </Link>
          <Link  style={{ textDecoration: "none", fontSize:"12px" ,lineHeight:"5px" }} className="menu5 pt-3" to="/home">
            <span>
                <p>Material</p>
              <p>Quality</p>
              <p>Control</p>
            </span>
          </Link>
          <Link  style={{ textDecoration: "none", fontSize:"12px" ,lineHeight:"5px" }} className="menu6 pt-3" to="/home">
            <span>
                <p>Cut panel</p>
              <p>Inspection</p>
            </span>
          </Link>
          <Link  style={{ textDecoration: "none", fontSize:"12px" ,lineHeight:"5px" }} className="menu7 pt-3" to="/home">
            <span>
                <p>Process</p>
                <p> quality</p>
              <p>Control</p>
            </span>
          </Link>
          <Link  style={{ textDecoration: "none", fontSize:"12px" ,lineHeight:"5px" }} className="menu8 pt-3" to="/home">
            <span>
                <p>Risk</p>
              <p>Analysis</p>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QualityTeams;
