// Enter your code here

function Palindrome()
{
    var rem, temp, final=0;
    if(isNaN(document.getElementById("number").value))
    {
        document.getElementById("result").style.color = "red";
        result="Please enter a number..."
    }
    else
    {
        var number = Number(document.getElementById("number").value);
        var result="";
        temp = number;
   
        while(number > 0)
        {
            rem=number%10;
            number = parseInt(number/10);
            final=final*10+rem;
        }
        if(final==temp)
        {
            document.getElementById("result").style.color = "green";
            result = "Yes. This is a Palindrome."
        }
        else
        {
            document.getElementById("result").style.color = "red";
            result="No. Try Again";
       }
    }

    document.getElementById("result").innerHTML = result;
      
}


