const accountId = 1234567
let accountemail = "tanusagar523@gmail.com"
var  accountPassword = "12345"
accountCity = "delhi"
console.log(accountId,accountemail);
accountemail = "ts123@gmail.com"
accountPassword = "987"
accountCity = "mumbai";
let accountstate = "maharastra";
console.table([accountId,accountemail,accountPassword,accountCity]); 
/*
preferred not to use var 
because of issue in block scope and functional scope*/