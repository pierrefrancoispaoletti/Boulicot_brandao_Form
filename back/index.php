<?php
// require_once '../../Ihm/_Config/Config.php';
// require_once Chemin_Site . '/_Fonctions/Includes.php';
// require_once Chemin_Site . '/_Communs/Verifier_Authentification.php';

// ["Res_Id" => $Res_Id, "Coll_Id" => $Coll_Id, "edit" => $edit] = $_REQUEST;

$Res_Id = $_REQUEST['Res_Id'] ?? "1";
$Coll_Id = $_REQUEST['Coll_Id'] ?? "coll_2";
$edit = "true";

if ($edit && strlen($edit)) {
    //ici on irait chercher en base de donnée le json encodé du document
    // pour le faire descendre a l'edition
    $dataFromBd =  json_encode("datas"); //requete DB sur la table dont on a besoin qui retourne une string (JSON)
}

// on recupere l'user ID du demandeur
// ["User_Id" => $User_Id] = $_SESSION["User"];

$user = (object) [
    "User_Id" => $User_Id ?? "test dev spé",
];

$encodedUser = json_encode($user);
// $encodedDocumentEdited = json_encode($Document);

// on fait descendre l'user id pour y avoir acces dans l'application
echo "<script type='text/javascript'>  userId = {$encodedUser} ;documentDatas={$dataFromBd}; Res_Id={$Res_Id} ;</script>  </script>";
require __DIR__ . '/react/index.html';
