import Form from "../Form/Form";
import { useState } from "react";

let edit = false;

let test = {
  client: {
    nom: { value: "Paoletti", label: "Nom", type: "text", required: true },
    prenom: { value: "Pierre", label: "Prènom", type: "text", required: true },
    adresse: { value: "42 b cours napoléon", label: "Adresse", type: "text" },
    telephone: { value: "0634171081", label: "Telephone", type: "tel" },
    mail: {
      value: "pierre.paoletti1@gmail.com",
      label: "E-Mail",
      type: "email",
    },
    provenance: { value: "", label: "Provenance", type: "text" },
    dateRdv: { value: "", label: "Date", type: "date" },
  },
  matiere: "BOIS",
  adresseChantier: "42 b cours napoléon",
  observation: "testtttttttttttttttr",
  tableau: [
    {
      repere: { value: "", type: "number" },
      hauteur: { value: "", type: "number" },
      largeur: { value: "", type: "number" },
      largeurEmbras: { value: "", type: "number" },
      quantite: { value: "", type: "number" },
      dorm: { value: "", type: "number" },
      type: { value: "", type: "text" },
      aile: { value: "", type: "text" },
      allege: { value: "", type: "text" },
      vitrage: { value: "", type: "text" },
      VMC: { value: "", type: "text" },
      seuil: { value: "", type: "text" },
      pBois: { value: "", type: "text" },
      largTapee: { value: "", type: "text" },
      hautSoubass: { value: "", type: "text" },
      quincall: { value: "", type: "text" },
      habitInt: { value: "", type: "text" },
      VR: { value: "", type: "text" },
      divers: { value: "", type: "text" },
    },
  ],
};

function App() {
  // ici on recupere les variables globales
  // comme l'user ID  et les donnees du document
  //qu'on a récupéré en back
  let userId = window.userId;
  let documentDatas = window.documentDatas;
  let Res_Id = window.Res_Id;

  const [client, setClient] = useState({
    nom: { value: "", label: "Nom", type: "text", required: true },
    prenom: { value: "", label: "Prènom", type: "text", required: true },
    adresse: { value: "", label: "Adresse", type: "text" },
    telephone: { value: "", label: "Telephone", type: "tel" },
    mail: { value: "", label: "E-Mail", type: "email" },
    provenance: { value: "", label: "Provenance", type: "text" },
    dateRdv: { value: "", label: "Date", type: "date" },
  });
  const [matiere, setMatiere] = useState("");
  const [adresseChantier, setAdresseChantier] = useState("");
  const [tableau, setTableau] = useState([]);
  const [observation, setObservation] = useState("");

  let dataModelForTableau = {
    repere: { value: "", type: "number" },
    hauteur: { value: "", type: "number" },
    largeur: { value: "", type: "number" },
    largeurEmbras: { value: "", type: "number" },
    quantite: { value: "", type: "number" },
    dorm: { value: "", type: "number" },
    type: { value: "", type: "text" },
    aile: { value: "", type: "text" },
    allege: { value: "", type: "text" },
    vitrage: { value: "", type: "text" },
    VMC: { value: "", type: "text" },
    seuil: { value: "", type: "text" },
    pBois: { value: "", type: "text" },
    largTapee: { value: "", type: "text" },
    hautSoubass: { value: "", type: "text" },
    quincall: { value: "", type: "text" },
    habitInt: { value: "", type: "text" },
    VR: { value: "", type: "text" },
    divers: { value: "", type: "text" },
  };

  // si document datas est defini alors on update le state avec
  // les donnees recuperees du back

  //par defaut l'edition est à false

  if (documentDatas && !edit) {
    edit = true;
    const {
      client: clientFromDatas,
      matiere: matiereFromDatas,
      adresseChantier: adresseChantierFromDatas,
      tableau: tableauFromDatas,
      observation: observationFromDatas,
    } = documentDatas;
    setClient({ ...clientFromDatas });
    setMatiere(matiereFromDatas);
    setObservation(observationFromDatas);
    setAdresseChantier(adresseChantierFromDatas);
    setTableau([...tableauFromDatas]);
  }

  return (
    <div className="App">
      <Form
        setClient={setClient}
        client={client}
        matiere={matiere}
        setMatiere={setMatiere}
        adresseChantier={adresseChantier}
        setAdresseChantier={setAdresseChantier}
        tableau={tableau}
        setTableau={setTableau}
        observation={observation}
        setObservation={setObservation}
        dataModelForTableau={dataModelForTableau}
        edit={edit}
        Res_Id={Res_Id}
        userId={userId}
      />
    </div>
  );
}

export default App;
