// * Task 1:
// * Create a function named `printName`
// * - that just prints your name on the screen
function printName(){
   
   console.log(`My name is Mohammed `);
}
/**
* Task 2:
* Create a function named `printAge`
* - that takes a birth year as a parameter,
* - and prints the age on the screen.
* - Age = current year - birth
*/
printName();

function printAge(brith_year){
   let age = 2023 - brith_year;
   console.log(`I'm ${age} years old`);
}
printAge(1996);
/**
* Task 3:
* Create a function named `printHello`
* - that takes 2 parameters, name, and language
* - language can be passed in different values, here are the accepted values:-
* -- en: it should print `Hello NAME`.
* -- es: it should print Hola NAME`
* -- fr: it should print `Bonjour NAME`
* -- tr: it should print `Merhaba NAME`
*/
function printHello(name, lang){
   let greet;
   if (lang=="en"){
       console.log(`Hello ${name}`);
   }else if(lang=="es"){
       console.log(`Hola ${name}`);
   }
   else if(lang=="fr"){
       console.log(`Bonjour ${name}`);
   }
   else if(lang=="tr"){
       console.log(`Merhaba ${name}`);
   }
}
printHello("Mohammed","en");
/**
* Task 4:
* Create a function named `printMax`
* - that takes 2 parameters as numbers
* - should print out the bigger number
*/
function printMax (num1, num2){
   if(num1>num2){
       return num1;
   }
   else if (num2>num1){
       return num2;
   }
   else{
       return "They are equall";
   }
}

console.log(printMax(10,6));