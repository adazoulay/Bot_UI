/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import "./Body.css";

import Row from "../Row/Row";

import FitbitMenu from "./FitbitMenu/FitbitMenu";
import PhoneMenu from "./PhoneMenu/PhoneMenu";
import ScheduleMenu from "./ScheduleMenu/ScheduleMenu";
import MedicationMenu from "./MedicationMenu/MedicationMenu";

export default function Body() {
  const [selected, setSelected] = useState("");

  function handleClick(e) {
    setSelected(e.currentTarget.id);
  }

  return (
    <>
      <Row handleClick={handleClick}></Row>
      <div className="main-menu">
        {selected === "FitbitBtn" && <FitbitMenu />}
        {selected === "PhoneBtn" && <PhoneMenu />}
        {selected === "ScheduleBtn" && <ScheduleMenu />}
        {selected === "MedicationBtn" && <MedicationMenu />}
      </div>
    </>
  );
}
