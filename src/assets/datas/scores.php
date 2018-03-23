<?php
    // Récupérer l'adresse de la promo
    $promo = json_decode(file_get_contents('php://input'));
    
    // Ecrire le score et vérifier qu'il s'agit bien d'un nombre entier
    if(is_int($promo->score)){
        if(file_put_contents($promo->adr.".js", $promo->score)){
            echo json_encode("Score mis à jour");
        }else{
            echo json_encode("Arf, erreur dans l'écriture du score");
        };
    }
?>