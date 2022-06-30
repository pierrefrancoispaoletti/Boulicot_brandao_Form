import React, { useCallback } from "react";
import InputTypeClient from "./InputTypeClient/InputTypeClient";

const FormClient = ({ setClient, client }) => {
  const handleChangeClient = useCallback(
    (e) => {
      const { name, value } = e.target;
      setClient({ ...client, [name]: { ...client[name], value } });
    },
    [client, setClient]
  );
  let clientKeys = Object.keys(client);

  return clientKeys?.map((clientKey) => (
    <InputTypeClient
      key={clientKey}
      {...client[clientKey]}
      clientKey={clientKey}
      handleChangeClient={handleChangeClient}
    />
  ));
};

export default FormClient;
