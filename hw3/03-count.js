function search()
{
    const p = document.getElementById("p");    
    
    const special =/[\\[{().+*?|^$]/g;;
    let input=document.getElementById("input").value;

    if(input!=="")
    {
      /* below line if we do not add the + " " then it will show, letter which happen to be in middle of words  */
         input = " " + input + " ";
        if(special.test(input)) input = input.replace(special,"\\$&");
        let regExp = new RegExp(input,"gi");
      // window.alert(p.textContent);
        p.innerHTML = (p.textContent).replace(regExp, "<mark>$&</mark>");
        
    }

}