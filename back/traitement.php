<?php

// on require les fonctions dont on à besoin

// require_once '../../Ihm/_Config/Config.php';
// require_once Chemin_Site . '/_Fonctions/Includes.php';
// require_once Chemin_Site . '/_Communs/Verifier_Authentification.php';

// $N_Client = N_Client;
// $dbAdmin = DB_ZEENDOC_ADMIN;
// $Coll_Id = "coll_2";

$extension = ".html";
$Nom_Fichier = "Formulaire_Devis" . date("YmdHis") . $extension;
$is_Edit = $_REQUEST["Res_Id"];

//fonction de depot de fichuer
function Depot_Fichier($n_client, $coll_id, $indexation, $nom_fichier, $user_id, $source, $content, $is_Edit, $datas)
{

    // if (strlen($n_client) == 0) return -1;

    // if (strlen($coll_id) == 0) return -2;

    // if (strlen($user_id) == 0) return -3;

    // if (strlen($source) == 0) return -4;

    // if (count($indexation) == 0) return -12;

    // if (strlen($nom_fichier) == 0) return -5;

    // if (strlen($content) == 0) return -7;

    // // on prépare le contenu du fichier.
    // $variant = session_id() . "|" . $user_id . "|" . $n_client . "|" . $coll_id . "|" . $nom_fichier;
    // $variant = md5($variant);

    // $tmp_dir = Tmp_Dir();

    // if (!is_dir($tmp_dir)) mkdir($tmp_dir);

    // $tmp_dir = Tmp_Dir() . "/" . $variant;
    // if (!is_dir($tmp_dir)) mkdir($tmp_dir);

    // $chemin_fichier = $tmp_dir . "/" . $nom_fichier;
    // Ecrire_Contenu_Dans_Fichier($chemin_fichier, $content, "w");

    // $resultat = Upload_Document_To_Client($n_client, $coll_id, $indexation, $chemin_fichier, $user_id, $source);

    // if (strlen($resultat) == 0) {
    //     $resultat = -8;
    // } else {
    //     $resultat = 1;
    // // Si c'est le premier depot du document, on rajoute la version stringifiée
    // // de la data dans la base de données
    // // $data = json_encode($datas)

    // // ici requete d'insert en bdd

    // //Si on est en mode edition on supprime le document precedenr
    //     if (isset($is_Edit) && strlen($is_Edit) > 0) {
    //         //ici on supprime le doc precedent;
    //         Supprimer_Document($coll_id, $is_Edit);
    //     }
    // }

    // return $resultat;
}

// ici on récupére les données du formulaire soumis
$datas = json_decode(file_get_contents("php://input"), true);

// on recupére toutes les données du formulaire et on les deballes dans ce tableau
// de cette façon on les assugnes à des customs

// [] = $datas;

[
    "User_Id" => $user_Id, //string
    "client" => $client, //tableau
    "matiere" => $matiere, //string
    "tableau" => $tableau, //tableau des cotes
    "adresseChantier" => $adresseChantier, //string
    "observation" => $observation, // string
] = $datas;

//on prepare une indexation du contenu pour le plan de classement
$Indexation = [];


// on recupere la source de depot de l'utilisateur courant

// $Source = Get_Db($dbAdmin)->SQLGetone("SELECT Id_Source FROM sources WHERE N_Client = #N_Client# AND User_Id=#User_Id# AND Id_Type_Source=2", array("N_Client" => $N_Client, "User_Id" => $user_id));

// on prepare le contenu a deposer dans zeendoc
ob_start();
?>
<!DOCTYPE html>
<html lang='fr'>

<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>

<style>

</style>


<body>

</body>

</html>

<?php
$content = ob_get_contents();
ob_clean();

//on Depose le document généré dans zeendoc

//$resultat = Depot_Fichier($N_Client, $Coll_Id, $Indexation, $Nom_Fichier, $user_id, $Source, $content, $is_Edit, $datas);
$resultat = 1;
if ($resultat == 1) {

    $data = ["status" => "OK"];
} else {
    $data = ["status" => "NOK"];
}
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);
