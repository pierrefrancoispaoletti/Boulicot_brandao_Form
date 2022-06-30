import React from "react";
import { InputClientStyledContainer } from "../styles.js/form.styles";

const InputTypeClient = ({
  clientKey,
  label,
  value,
  required,
  type,
  handleChangeClient,
}) => {
  return (
    <>
      <InputClientStyledContainer error={required && !value}>
        <label htmlFor={label}>{label.toUpperCase()}</label>
        <input
          required={required}
          type={type}
          id={label}
          name={clientKey}
          value={value}
          onChange={handleChangeClient}
        />
        {required && !value && (
          <div className="error-message">Ce champ est obligatoire</div>
        )}
      </InputClientStyledContainer>
    </>
  );
};

export default InputTypeClient;
