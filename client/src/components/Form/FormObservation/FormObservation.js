import React from "react";
import { Container } from "../FormAdresseChantier/styles.js/formadressechantier.style";

const FormObservation = ({ observation, setObservation }) => {
  return (
    <Container>
      <label htmlFor="observation">Observations</label>
      <textarea
        name="observation"
        id="observation"
        cols="40"
        rows="3"
        value={observation}
        onChange={(e) => setObservation(e.target.value)}
      ></textarea>
    </Container>
  );
};

export default FormObservation;
