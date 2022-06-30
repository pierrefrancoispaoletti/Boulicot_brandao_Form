import React from "react";
import { Container } from "./styles.js/formadressechantier.style";

const FormAdresseChantier = ({ adresseChantier, setAdresseChantier }) => {
  const handleChangeAdresseChantier = (e) => {
    setAdresseChantier(e.target.value);
  };
  return (
    <Container>
      <label htmlFor="adresse_chantier">Adresse Chantier</label>
      <textarea
        cols="40"
        rows="3"
        type="text"
        name="adresse_chantier"
        id="adresse_chantier"
        value={adresseChantier}
        onChange={handleChangeAdresseChantier}
      />
    </Container>
  );
};

export default FormAdresseChantier;
