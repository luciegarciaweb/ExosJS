/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function exercice02()
{
    var message = ("Hello everyone!");
    var Length = getStringLength(message);
    var nbSpace = 0;
    var nbO = 0;
    var position = "The positions of 'o' letter are: ";

    console.log(message);
    for(var i = 0; i <= Length; i++)
    {
        var result = 8;
        if(message[i] == " "){
            nbSpace++;
        }
        if(message[i] == "o"){
            nbO++;
            position = position + (i + 1) + ", "; //concatenation
        }
    }

    console.log("The number of space between letters is " + nbSpace);
    console.log("The number of 'o' is " + nbO);
    console.log(position);
    console.log(result);
}

