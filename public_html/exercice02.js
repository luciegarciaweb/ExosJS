/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function exercice02() {

    var message = ("bonjour à tous !");
    var longueur = getStringLength(message);
    var nbSpace = 0;
    var nbO = 0;
    var position = "la position de 'o' sont: ";

    console.log(message);
    for (var i = 0; i <= longueur; i++) {
        var totaux = 8;
        if (message[i] == " ") {
            nbSpace++;
        }
        if (message[i] == "o") {
            nbO++;
            position = position + (i + 1) + ", "; //concatenation
        }
    }

    console.log("le nombre d'espaces est " + nbSpace);
    console.log("le nombre de 'o' est " + nbO);
    console.log(position);
    console.log(totaux);
}

