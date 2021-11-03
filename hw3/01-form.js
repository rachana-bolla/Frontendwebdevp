// Enter your code here

function submitdata()
{
    const myform=document.getElementById("Myform");
    myform.addEventListener("submit",(e) => {e.preventDefault();console.log("Form has been submitted");})
    var name = document.getElementById("Name").value;
   var email = document.getElementById("Email").value;
  
   var reg = document.getElementById("registration").value;
  
  var clsopt = document.getElementById("classsel").value;
  var courses = document.getElementById("courses").value;
  var rawtext = document.getElementById("anyinfo").value;
    console.group();
    console.log("Name : "+name);
    console.log("Email : "+email);
    console.log("Registration : "+reg);
    console.log("Class : "+clsopt);
    console.log("Courses :"+courses);
    console.log("Anything else? : "+rawtext);
   
}