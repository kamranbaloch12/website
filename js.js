

function vali(){

  var full = document.getElementById("inputEmail4");
  var address = document.getElementById("inputAddress");
  var city = document.getElementById("inputCity");
  var contact = document.getElementById("inputZip");
  var email = document.getElementsByClassName("email");
  
 if(full.value.trim()==""){

     alert("please check  your form")
     return false
 }

 else if(address.value.trim()=="")  
       {
        alert("please check  your form")
        return false
       }   


       else if(city.value.trim()=="")  
       {
        alert("please check  your form")
        return false
       }   
    
       else if(contact.value.trim()=="")  
       {
        alert("please check  your form")
        return false
       }   
 
       else if(email.value.trim()=="")  
       {
        alert("please check  your form")
        return false
       }   
 
 
 
   else
      {
          true
      }
 
 


}