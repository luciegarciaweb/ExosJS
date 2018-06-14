/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function writeNewDiv() {
    var div = document.getElementById("exoXX");
    var resultatDeLExo = "texte qui va bien";
    var texte = document.createTextNode(resultatDeLExo);
    div.appendChild(texte);
}

//Obtenir la longueur d'un mot
function getStringLength(chaine) {
    var longueur = 0;
    while (true) {
        if (chaine[longueur] !== undefined) {
            longueur++;
        } else {
            break;
        }
    }
    return longueur;
}


function camelCase(pMessage) {

    var longueur = getStringLength(pMessage);
    var newChaine = [];
    var concat = "";
    var tabEquiv = {
        'a': 'A',
        'b': 'B',
        'c': 'C',
        'd': 'D',
        'e': 'E',
        'f': 'F',
        'g': 'G',
        'h': 'H',
        'i': 'I',
        'j': 'J',
        'k': 'K',
        'l': 'L',
        'm': 'M',
        'n': 'N',
        'o': 'O',
        'p': 'P',
        'q': 'Q',
        'r': 'R',
        's': 'S',
        't': 'T',
        'u': 'U',
        'v': 'V',
        'w': 'W',
        'x': 'X',
        'y': 'Y',
        'z': 'Z'
    }; //instruction avec";"
    console.log(pMessage);
    for (var i = 0; i < longueur; i++) {

        if (i == 0) {
            newChaine[i] = tabEquiv[pMessage[i]];
            //gestion des espaces antérieur au caractère 
        } else if (pMessage[i - 1] == " ") {
            newChaine[i] = tabEquiv[pMessage[i]];
        } else {
            newChaine[i] = pMessage[i];
        }
        //concaténation dans la boucle (phrase reconstituée)
        concat = concat + newChaine[i];
    }
    return(concat);
}

/*
 function counter(pMessage) {
 var longueur = getStringLength(pMessage);
 var compteur = 0;
 
 
 for (var i = 0; i < longueur; i++) {
 if (pMessage[i])
 }
 }*/

//mettre valeur (ici mots) dans un tableau
function motTableau(pMessage) {


    var longueur = getStringLength(pMessage);
    var tableau = [];
    var newWord = "";

    for (var i = 0; i <= longueur; i++) {


        if (pMessage[i] == " " || pMessage[i] === undefined) {
            tableau.push(newWord);
            newWord = "";
        } else {
            newWord += pMessage[i];
        }
    }
    return(tableau);
}

function positionMot(pMessage) {

    var counterPos = 0;
    var longueur = getStringLength(pMessage);
    var tableauAssos = {};

    for (var i = 0; i <= longueur; i++) {
        
        if (pMessage[i] == " " || pMessage[i] === undefined) {
            counterPos++;
            tableauAssos.newWord=counterPos;
            newWord = "";
        }else{
            newWord += pMessage[i];
        }
        
    }
    return(positionTab);
}