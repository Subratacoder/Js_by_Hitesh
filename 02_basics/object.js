// Singleton

// Object Literal

const mySym = Symbol("1");
// Object.create // Construtor method
const user = {
    name: "Subrata",
    [mySym]: "mySym 1",
    age: 20,
    location: "Kolkata",
    email_Id: "subrataacharjee39@gmail.com",
}

console.log(user.age);
console.log(user["location"]);
console.log(user[mySym]);

user.location = "Dubai",
// Object.freeze(user) // use to freeze the object value
// user.email_Id = "subrata@google.com"

console.log(user);

user.invitation = function () {
    console.log("Hello Js User");
}
console.log(user.invitation);
console.log(user.invitation());
user.greeting = function () {
    console.log(`hello, ${this.name}`);
}
console.log(user.greeting());