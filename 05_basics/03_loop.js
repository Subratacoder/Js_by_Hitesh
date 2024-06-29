// for of loop

// const myHeros = ["Krish", "Saktiman", "Hanuman"]
// for (const index of myHeros) {
//    console.log(index); 
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('EN', "England")
map.set('Jap', "Japan")
map.set('PAK', "Pakistan")

// console.log(map);

for (const [key, val] of map) {
    // console.log(`${key} == ${val}`);
}

const myObject = {
    'Game1' : 'GTA-5',
    'Game2' : 'NFS',
}

for (const Game of myObject) {
    console.log(Game);
}