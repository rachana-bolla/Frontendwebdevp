
function getParameters() {
  let urlstr1 = document.getElementById("comments").value;

   let urlString = urlstr1.replace('%40','@')
  
  
               let paramString = urlString.split('?')[1];
               
               var urlst = "";
      if(paramString==null)
      {
       urlst = urlString.split('?')[0];
    }
    else{
      
        urlst = urlString.split('?')[0] +"<br><br>" + "Query Parameters";
       
    
       
               let params_arr = paramString.split('&');
               
               for (let i = 0; i < params_arr.length; i++) {
                     
                   let pair = params_arr[i].split('=');
                   urlst = urlst + "<br>" + pair[0] + " : " +pair[1];
                   console.log("Key is:" + pair[0]);
                   console.log("Value is:" + pair[1]);
               }
            } 
               document.getElementById("results").innerHTML = urlst;
} 

// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
