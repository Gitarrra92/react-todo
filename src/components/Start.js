import React from 'react';
import {Link} from "react-router-dom";

 function Start() {
    return (
        <div style={startPage}>
            <h1>This is Task Manager</h1>
            <p style={{margin: "1.5em 0"}}>In this app you cann add your tasks and delete them when are done</p>
            <strong><Link to="/todo" style={{color: "#fff", padding: "9px", background: "green"}}>Task manager</Link></strong>
        </div>
    )
}

const startPage = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    padding: "1em",
    background: "#38ad7c",
    color: "#fff",
    height: "50vh"
}

export default Start;
