function init(){
    }
    
    function startStop(){
        document.getElementById("startButton").hidden = true;
        document.getElementById("stopButton").hidden=false;
    moveRight();
    change();
    }
    //space
    function moveRight(){
    
        var r = Math.floor(Math.random() * 256);
                var g = Math.round(Math.random() * 256);
                var b = Math.round(Math.random() * 256);
                var b = Math.round(Math.random() * 256);
    
                ColorValue = "rgba("+r+","+g+","+b+",10)";
           
            

                animate = setTimeout(moveRight,document.getElementById("interval").value*1000);
                document.body.style.background = ColorValue;
                
                
    }
    
    function change(){
    var elem = document.getElementById("startButton");
    if (elem.value=="Stop")  elem.value = "Start";
    else elem.value = "Start";

    
    }
    
    function stop(){
        document.getElementById("stopButton").hidden= true;
        document.getElementById("startButton").hidden = false;
       
    clearTimeout(animate);

    }
    
    window.onload =init;