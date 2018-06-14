/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function writeNewDiv()
{
    var div = document.getElementById("exoXX");
    var resultExo = "text here as you prefer";
    var text = document.createTextNode(resultExo);
    div.appendChild(text);
}

//Get word length
function getStringLength(string) {
    var length = 0;
    while(true)
    {
        if(string[length] !== undefined){
            length++;
        }else{
            break;
        }
    }
    return length;
}


function camelCase(pMessage){

    var length = getStringLength(pMessage);
    var newString = [];
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
    }; //instruction with ";"
    console.log(pMessage);

    for(var i = 0; i < length; i++)
    {
        if(i == 0){
            newString[i] = tabEquiv[pMessage[i]];
            //manage spaces antérieur au caractère 
        }else if(pMessage[i - 1] == " "){
            newString[i] = tabEquiv[pMessage[i]];
        }else{
            newString[i] = pMessage[i];
        }
        //concatenation in the loop 
        concat = concat + newString[i];
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

//the word in the tab
function motTableau(pMessage) {


    var length = getStringLength(pMessage);
    var tab = [];
    var newWord = "";

    for(var i = 0; i <= length; i++)
    {
        if(pMessage[i] == " " || pMessage[i] === undefined){
            tab.push(newWord);
            newWord = "";
        }else{
            newWord += pMessage[i];
        }
    }
    return(tab);
}

function positionMot(pMessage)
{
    var counterPos = 0;
    var length = getStringLength(pMessage);
    var tabAssos = {};

    for(var i = 0; i <= length; i++)
    {
        if (pMessage[i] == " " || pMessage[i] === undefined) {
            counterPos++;
            tabAssos.newWord=counterPos;
            newWord = "";
        }else{
            newWord += pMessage[i];
        }
        
    }
    return(positionTab);
}