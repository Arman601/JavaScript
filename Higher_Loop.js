// for of Loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) { //(nun variable hai)
    //console.log(num);

}



const greeting = "Hello World";
for (const greet of greeting) {
    console.log(greet);
}


//Map (Map me unique value  hote hai)
const map = new Map()
map.set('IN', "India");
map.set('Fr', "France");
map.set('USA', "United States of America");

// console.log(map);
for (const [key, vlaues] of map) {
    console.log(key, ':- ', vlaues);

}




