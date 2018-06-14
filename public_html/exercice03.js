/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function exercice03()
{
    var message = "This is a long text";
    var length = getStringLength(message);
    var tab = []; //my message is in a tab
    var dash = [];//tab 
    var sentence = "";

    for(var i = 0; i < length; i++)
    {
        //Replace all «e» by «E»
        if(message[i] == "e"){
            tab[i] = 'E';
        //Replace all spaces by dashes
        }else if(message[i] == " "){
            tab[i] = '-';

        }else{
            tab[i] = message[i];
        }
        //Concatenation to write sentence from the tab
        sentence = sentence + tab[i];
        //sentence += tab[i]; 

        //Change each word's first letter by upper case
        if(message[i] == " "){
        }
    }
    
    console.log(tab);
    console.log(sentence);
    console.log(camelCase(message));
}


