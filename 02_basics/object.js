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
console.log(user);