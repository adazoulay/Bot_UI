/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Button/Button";
import "./Row.css";

export default function Row({ handleClick }) {
  return (
    <div className="button-row">
      <Button id="FitbitBtn" styling="row-button" onClick={handleClick}>
        Fitbit
      </Button>
      <Button id="PhoneBtn" styling="row-button" onClick={handleClick}>
        Phone
      </Button>
      <Button id="ScheduleBtn" styling="row-button" onClick={handleClick}>
        Schedule
      </Button>
      <Button id="MedicationBtn" styling="row-button" onClick={handleClick}>
        Medication
      </Button>
    </div>
  );
}
