/* eslint-disable react/prop-types */
import React from "react";
import Button from "../../../Button/Button";
import "./FitbitOptions.css";

export default function FitbitOptions({ handleClick }) {
  return (
    <div className="button-col">
      <Button id="HeartRateBtn" styling="col-button" onClick={handleClick}>
        Heart Rate
      </Button>
      <Button id="SleepQualityBtn" styling="col-button" onClick={handleClick}>
        Sleep Quality
      </Button>
      <Button id="ExerciseLevelBtn" styling="col-button" onClick={handleClick}>
        Exercise Level
      </Button>
    </div>
  );
}
