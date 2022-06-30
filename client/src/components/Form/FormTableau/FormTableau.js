import React, { useCallback } from "react";
import Button from "../../Button/Button";
import { Container, TableStyled } from "./styles.js/formtableau.style";

const FormTableau = ({ tableau, setTableau, dataModelForTableau }) => {
  const handleAddLign = useCallback(() => {
    let newTableau = [...tableau, { ...dataModelForTableau }];
    setTableau([...newTableau]);
  }, [dataModelForTableau, setTableau, tableau]);

  const handleDeleteLigne = useCallback(
    (indexLigne) => {
      let oldTableau = [...tableau];
      let newTableau = oldTableau.filter((el, index) => index !== indexLigne);
      setTableau([...newTableau]);
    },
    [setTableau, tableau]
  );

  const handleChangeLigne = useCallback(
    (indexLigne) => (e) => {
      let newTableau = [...tableau];
      newTableau[indexLigne][e.target.name].value = e.target.value;
      setTableau(newTableau);
    },
    [setTableau, tableau]
  );

  const calculateKey = (keyColumn, keyRow) => {
    return String(keyColumn) + String(keyRow);
  };
  const tableauKeys = Object.keys(dataModelForTableau);

  return (
    <Container>
      {tableau.length > 0 && (
        <TableStyled border="0">
          <thead>
            <tr>
              {tableauKeys.map((key) => (
                <th
                  style={{
                    height: "34px",
                    textAlign: "left",
                  }}
                  key={key}
                >
                  {key.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          {/* 1ere ligne ici , donc boucler sur le tableau a ce point la */}
          {tableau.map((lignes, indexLigne) => (
            <tbody>
              <tr
                style={{
                  display: "flex",
                  flexDirection: "column",
                  verticalAlign: "center",
                  alignItems: "center",
                }}
                key={indexLigne}
              >
                {Object.values(lignes).map((ligne, index) => (
                  <td key={calculateKey(indexLigne, index)}>
                    <input
                      style={{ fontSize: "1.1em" }}
                      type={ligne.type}
                      name={tableauKeys[index]}
                      value={tableau[indexLigne][tableauKeys[index]].value}
                      onChange={handleChangeLigne(indexLigne)}
                    />
                  </td>
                ))}
                <td>
                  <Button
                    type="button"
                    onClick={() => handleDeleteLigne(indexLigne)}
                    typeAction="X"
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </TableStyled>
      )}
      <Button typeAction="+" type="button" onClick={() => handleAddLign()} />
    </Container>
  );
};

export default FormTableau;
