const user = {
    username: "Subrata",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},Welcome to Website`);
        console.log(this);
        
        
    }
}

user.welcomeMessage()
user.username = "Subho"
user.welcomeMessage()

function chai(){
    let name = "Sneha"
    console.log(this.name);
}

chai() // This is not showing name because "this" is only work on object in javascript

// ARROW FUNCTION 👇
const chai = () => {
    let name = "Sneha"
    console.log(this.name);
}

chai()

const addTwo =(num1, num2) =>  num1 + num2; // This is called "IMPLICIT RETURN"

const addTwo = (num1, num2) => {
    return num1 + num2          // This is called "EXPLICIT RETURN"
}
console.log(addTwo(45, 54));

/****************************************************************************************/

// IIFE(Immediatly Invoked Function Expressions)

(function chai (){
    // NAMED IIFE
    console.log("DB Connected");
    
 })();

(() => {
    console.log("DB Connected Done");
    
 })();

((str) => {
    console.log(`${str} is connected`);

 })("Database");
