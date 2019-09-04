import React, {Component} from 'react';

function Header() {
    return (
      <div style={headerStyle}>
       <h1>My Task manager</h1>
      </div>
    );
  }

  const headerStyle = {
      backgroundColor : "green",
      color: "#fff",
      padding: "60px 20px",
      display: "flex",
      justifyContent: "center",
      fontSize: "1em"
  }

export default Header;