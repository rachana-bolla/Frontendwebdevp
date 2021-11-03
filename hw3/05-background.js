// Enter your code here
var button;
function counttext()
{
    
   
    button = document.getElementById("Start").value;
    document.getElementById("Start").disabled = true;
    document.getElementById("Start").hidden = true;
    document.getElementById("Stop").disabled = false;
    document.getElementById("Stop").hidden = false;

    

var index = Math.round(Math.random() * 9);
var ColorValue = "FFFFFF"; // default color - white (index = 0)

var inputVal = document.getElementById("Start").value;

var r = Math.floor(Math.random() * 256);
var g = Math.round(Math.random() * 256);
var b = Math.round(Math.random() * 256);
var b = Math.round(Math.random() * 256);

ColorValue = "rgba("+r+","+g+","+b+",0.1)";
 //  window.alert(ColorValue);
                     
    document.getElementsByTagName("body")[0].style.backgroundColor = ColorValue;
  
 //counttext();
// window.alert(document.getElementById("interval").value*1000); // background color change on every 5 sec
    
 if(document.getElementById("Start").hidden == true)
 {
 window.setTimeout( "counttext()" , document.getElementById("interval").value*1000); // background color change on every 5 sec
 }
 else{
    
    button="Stop";
    
    document.getElementById("Start").disabled = false;
    document.getElementById("Start").hidden = false;
    document.getElementById("Stop").disabled = true;
    document.getElementById("Stop").hidden = true;
    console.log("Wait...");
}

}

function Stopcounttext()
{
    console.log("Wait...");
    button="Stop";
    document.getElementById("Start").disabled = false;
    document.getElementById("Start").hidden = false;
    document.getElementById("Stop").disabled = true;
    document.getElementById("Stop").hidden = true;
   
    window.setTimeout( "Stopcounttext()" , document.getElementById("interval").value*1000); // background color change on every 5 sec
 /*
var index = Math.round(Math.random() * 9);
var ColorValue = "FFFFFF"; // default color - white (index = 0)
document.getElementsByTagName("body")[0].style.backgroundColor = ColorValue;
*/
}
