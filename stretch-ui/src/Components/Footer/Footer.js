/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Button/Button";
import "./Footer.css";

export default function Footer() {
  function handleClick(e) {
    e.stopPropagation();
    alert("Dialing 911");
  }

  return (
    <footer>
      <Button id="AllertBtn" styling="allert-button" onClick={handleClick}>
        Alert
      </Button>
    </footer>
  );
}
