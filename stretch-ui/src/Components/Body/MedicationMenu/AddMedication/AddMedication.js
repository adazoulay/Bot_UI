/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

import "./AddMedication.css";

export default function AddMedication({ handleOnSubmit }) {
  const [entry, setEntry] = useState({ name: "", dosage: "", frequency: "" });

  function handleNameChange(e) {
    setEntry({
      ...entry,
      name: e.target.value,
    });
  }

  function handleDosageChange(e) {
    setEntry({
      ...entry,
      dosage: e.target.value,
    });
  }

  function handleFrequencyChange(e) {
    setEntry({
      ...entry,
      frequency: e.target.value,
    });
  }

  return (
    <form onSubmit={handleOnSubmit} className="add-medication-form">
      <label className="form-row">
        name: {"\u00A0"}
        {"\u00A0"}
        <input value={entry.name} onChange={handleNameChange} />
      </label>
      <label className="form-row">
        dosage: {"\u00A0"}
        {"\u00A0"}
        <input value={entry.dosage} onChange={handleDosageChange} />
      </label>
      <label className="form-row">
        frequency: {"\u00A0"}
        {"\u00A0"}
        <input value={entry.frequency} onChange={handleFrequencyChange} />
      </label>
      <button className="form-btn" type="submit">
        Add
      </button>
    </form>
  );
}
