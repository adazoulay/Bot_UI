/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import "./FitbitMenu.css";

import FitbitOptions from "./FitbitOptions/FitbitOptions";

import heartRate from "../../../Assets/heart_rate.png";
import sleep from "../../../Assets/sleep.png";
import fitness from "../../../Assets/fitness.png";

export default function FitbitMenu() {
  const [selected, setSelected] = useState("");

  function handleClick(e) {
    console.log(e.currentTarget.id);
    setSelected(e.currentTarget.id);
  }

  let fitbit_submenu = null;

  switch (selected) {
    case "HeartRateBtn":
      fitbit_submenu = heartRate;
      break;
    case "SleepQualityBtn":
      fitbit_submenu = sleep;
      break;
    case "ExerciseLevelBtn":
      fitbit_submenu = fitness;
      break;
    default:
      fitbit_submenu = heartRate;
  }

  return (
    <div className="fitbit-menu">
      <FitbitOptions handleClick={handleClick}></FitbitOptions>
      <img className="style-img" src={fitbit_submenu} alt="Asset missing" />
    </div>
  );
}
