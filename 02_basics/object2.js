// const xuser = new Object() // singleton object
const fbuser = {}

fbuser.id = "123Subho"
fbuser.name = "Subrata"
fbuser.isloggedin = false

// console.log(fbuser);
console.log(Object.keys(fbuser));
console.log(Object.values(fbuser));

const anotheruser = {
    email: "subrata@chatgpt",
    username: {
        fullname: {
            firstname: "Subrata",
            lastname: "Acharjee",
        }
    }
}

// console.log(anotheruser.username);
// console.log(anotheruser.username.fullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const newobj = Object.assign({},obj1, obj2)
const newobj = {...obj1,...obj2}
// console.log(newobj);