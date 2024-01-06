const marvel_heroes = ["Ironman", "Spiderman", "Thor"]
const dc_heroes = ["Batman", "Superman", "Flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); 
// console.log(marvel_heroes[3][0]); 

// allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

//Spread Operator

const my_all_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(my_all_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [1, 0 ]]];
const new_another_array = another_array.flat(2);
console.log(new_another_array);

console.log(Array.isArray(263));
console.log(Array.from("subho"));