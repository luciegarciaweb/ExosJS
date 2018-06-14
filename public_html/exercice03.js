/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function exercice03() {

    var message = "ceci est un texte assez long";
    var longueur = getStringLength(message);
    var tableau = []; //mon message est dans un tableau
    var tiret = [];//tableau pour
    var phrase = "";

    for (var i = 0; i < longueur; i++) {
        //Remplacez tous les «e»par des «E»
        if (message[i] == "e") {
            tableau[i] = 'E';
        //Remplacez tous les espaces par des tirets.
        } else if (message[i] == " ") {
            tableau[i] = '-';

        } else {
            tableau[i] = message[i];
        }
        //concaténation pour écrire la phrase depuis le tableau
        phrase = phrase + tableau[i];
        //phrase += tableau[i]; (celle à faire)

        //Changer la première lettre de chaque mot par une majuscule.
        if (message[i] == " ") {
        }
    }
    console.log(tableau);
    console.log(phrase);
    console.log(camelCase(message));
}


