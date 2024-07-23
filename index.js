document.addEventListener("formtLoaded", function() {
    fields.Name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.address = document.getElementById('address');
    fields.Mobileno = document.getElementById('Mobileno');
    
   })
   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }
   function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }
   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }
   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }
   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.Name, isNotEmpty);
    valid &= fieldValidation(fields.address, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.Mobileno, isNumber);
   
    return valid;
   }
   class User {
    constructor(Name,address,email,Mobileno) {
    this.name = Name;
    this.address = address;
    this.email = email;
    this.Mobileno = Mobileno;

    }
   }
 function submit(){
     if ((isvalid)){
         let usr=new user(name.value,address.value,Mobileno.value,email.value);
       alert('{$usr.name}' `thanks for registring`);
       window.location.href="BLOGPAGE.html";

     }
    else{ 
        alert("there was an error");
        window.location.href="index.html";

   }
 }
