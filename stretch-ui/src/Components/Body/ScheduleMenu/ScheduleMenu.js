/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ScheduleMenu() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Calendar onChange={onChange} value={value} />
    </>
  );
}
