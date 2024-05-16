// // for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("Here is your Number 🙏");
    }
    // console.log(element);
}

for (let index = 0; index <= 10; index++) {
    // console.log(`outer loop : ${index}`);
    for (let i = 0; i <= 10; i++) {
    //    console.log(`inner loop value ${i} & inner loop ${index} `);
        
    }
}

let myarr = ["Ironman", "Thor", "Loki", "Captain"]
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
}

break & continue

for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index == 5) {
        console.log("Detected 5");
        break
    }
    console.log(element);
}
for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(element);
}