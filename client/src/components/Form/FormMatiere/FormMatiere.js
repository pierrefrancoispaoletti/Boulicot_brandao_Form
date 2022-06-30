import React from "react";
import { useCallback } from "react";
import { Container } from "./styles.js/formmatiere.style";

const FormMatiere = ({ matiere, setMatiere }) => {
  const handleChangeMatiere = useCallback(
    (e) => {
      const { value } = e.target;
      setMatiere(value);
    },
    [setMatiere]
  );
  return (
    <Container>
      <div className="form-radio-container">
        <label htmlFor="PVC">PVC</label>
        <input
          type="radio"
          name="matiere"
          id="PVC"
          value="PVC"
          checked={matiere === "PVC"}
          onChange={handleChangeMatiere}
        />
      </div>
      <div className="form-radio-container">
        <label htmlFor="ALU">ALU</label>
        <input
          type="radio"
          name="matiere"
          id="ALU"
          value="ALU"
          checked={matiere === "ALU"}
          onChange={handleChangeMatiere}
        />
      </div>
      <div className="form-radio-container">
        <label htmlFor="MIXTE">MIXTE</label>
        <input
          type="radio"
          name="matiere"
          id="MIXTE"
          value="MIXTE"
          checked={matiere === "MIXTE"}
          onChange={handleChangeMatiere}
        />
      </div>
      <div className="form-radio-container">
        <label htmlFor="BOIS">BOIS</label>
        <input
          type="radio"
          name="matiere"
          id="BOIS"
          value="BOIS"
          checked={matiere === "BOIS"}
          onChange={handleChangeMatiere}
        />
      </div>
    </Container>
  );
};

export default FormMatiere;
