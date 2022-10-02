/* eslint-disable react/prop-types */
import React from "react";
import "./Button.css";

export default function Button({ children, styling, onClick, id }) {
  return (
    <button id={id} className={styling} onClick={onClick}>
      {children}
    </button>
  );
}
