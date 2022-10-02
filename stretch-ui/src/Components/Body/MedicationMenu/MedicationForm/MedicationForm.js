/* eslint-disable react/prop-types */
import React from "react";
import "./MedicationForm.css";

export default function MedicationForm({ medicationList }) {
  let medicationRows = medicationList.map((med, index) => {
    return (
      <tr key={index}>
        <td>{med.name}</td>
        <td>{med.dosage}</td>
        <td>{med.frequency}</td>
      </tr>
    );
  });

  return (
    <table className="medication-table">
      <caption>Medication</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Dosage</th>
          <th scope="col">Frequency</th>
        </tr>
      </thead>
      <tbody className="content">{medicationRows}</tbody>
    </table>
  );
}
