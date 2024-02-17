function name(){
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("A");
}   

// name ()

function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2);
    // let sumoftwo = num1 + num2
    // return sumoftwo
    return num1 + num2
}

const sumoftwo = addTwoNumbers(20, 20)
//  console.log("sumoftwo: ", sumoftwo);

function loginUsserMessage(username = "Sneha") {
    if (username == undefined) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUsserMessage("Subrata"));
// console.log(loginUsserMessage());


// *****************************Function with Object********************************

function calShoppingCart(...num1){
    return num1  
}

console.log(calShoppingCart(500, 100, 1500));