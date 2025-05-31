//Falsy values:-
//false values , hote hai : 0,-0, "", null, undefined , NaN
//truthy values: "0",'false', "", [],{}, function(){} 

const userEmail = "arman@gmail.com";
if (userEmail) {
    console.log("Got user Email");
}
else {

    console.log("Not");
}



//Nullush coalescing  operator (?? ): null undefined likhne pe kam krta hai

// let val1;
// val1 = 5 ?? 10;
// console.log(val1);

// let val1;
// val1 = null ?? 20;
// console.log(val1);


let val1;
val1 = undefined ?? 50;
console.log(val1);









