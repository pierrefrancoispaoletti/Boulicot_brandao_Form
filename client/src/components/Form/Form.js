import axios from "axios";
import FormClient from "./FomrClient/FormClient";
import FormMatiere from "./FormMatiere/FormMatiere";
import FormAdresseChantier from "./FormAdresseChantier/FormAdresseChantier";
import { FormStyled, Wrapper } from "./styles.js/form.style";
import Separator from "../Separator/Separator";
import FormTableau from "./FormTableau/FormTableau";
import FormObservation from "./FormObservation/FormObservation";
import Button from "../Button/Button";
const Form = ({
  setClient,
  client,
  matiere,
  setMatiere,
  adresseChantier,
  setAdresseChantier,
  tableau,
  setTableau,
  observation,
  setObservation,
  dataModelForTableau,
  edit,
  Res_Id,
  userId,
}) => {
  const axiosCall = async (datas) => {
    const response = await axios({
      method: "POST",
      url: `traitement.php/${edit ? "?Res_Id=" + Res_Id : ""}`,
      data: datas,
    });

    if (response.data.status === "OK") {
      setTimeout(() => {
        window.close();
      }, 1000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let datas = JSON.stringify({
      User_Id: userId.User_Id,
      client,
      matiere,
      adresseChantier,
      observation,
      tableau: [...tableau],
    });

    axiosCall(datas);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <h2>Client</h2>
      <FormClient setClient={setClient} client={client} />
      <Separator />
      <h2>Informations</h2>
      {/* wrapper du champs matiere et adresse du chantier */}
      <Wrapper>
        <FormMatiere matiere={matiere} setMatiere={setMatiere} />
        <Separator isHidden={true} />
        <FormAdresseChantier
          adresseChantier={adresseChantier}
          setAdresseChantier={setAdresseChantier}
        />
      </Wrapper>
      <Separator />
      <h2>Côtes</h2>
      <FormTableau
        tableau={tableau}
        setTableau={setTableau}
        dataModelForTableau={dataModelForTableau}
      />
      <Separator />
      <h2>Observations</h2>
      <FormObservation
        observation={observation}
        setObservation={setObservation}
      />
      <Separator />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button type="submit" typeAction="Soumettre" />
      </div>
    </FormStyled>
  );
};

export default Form;
