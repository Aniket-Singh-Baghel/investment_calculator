import React from "react";
import logo from '../investment-calculator-logo.png'

function Header() {
  return <div id="header">
    <img src={logo} alt="" />
    <h1>Investment Calculator</h1>
  </div>;
}

export default Header;
