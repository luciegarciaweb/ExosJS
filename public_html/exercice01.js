/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*Initialisez une variable message à la valeur «hello world!». 
 Initialisezune variable taille avec la longueur de «message»*/

function exercice01() {
    var message = ("hello world!");
    var taille = getStringLength(message);
    for (var i = 0; i < taille; i++) {
        console.log(i+ " " + message[i]);
    }
}
