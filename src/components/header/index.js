import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <div>
            <img alt = "logo" className = "logo" src = "https://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/128/MetroUI-Other-Task-icon.png"/>
        </div>
        <div className="header-title">
          Task Manager
        </div>
      </div>
    </header>
  );
};

export default Header;