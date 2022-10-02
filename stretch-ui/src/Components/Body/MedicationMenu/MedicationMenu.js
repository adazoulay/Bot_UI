/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import "./MedicationMenu.css";
import AddMedication from "./AddMedication/AddMedication";
import MedicationForm from "./MedicationForm/MedicationForm";

export default function MedicationMenu() {
  const [medication, setMedication] = useState([
    { name: "", dosage: "", frequency: "" },
  ]);

  function handleOnSubmit(e) {
    e.preventDefault();
    let newMed = {
      name: e.target[0].value,
      dosage: e.target[1].value,
      frequency: e.target[2].value,
    };
    setMedication([...medication, newMed]);
    console.log(medication);
  }

  return (
    <div className="medication-menu">
      <AddMedication handleOnSubmit={handleOnSubmit} />
      <MedicationForm medicationList={medication} />
    </div>
  );
}
