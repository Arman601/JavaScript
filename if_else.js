//

// let myage = 18;
// if (myage == 18) console.log("you can  vote");




// let age = 19;
// if (age >= 18) {
//     console.log("you can vote");

// }
// else {
//     console.log("you can not vote");
// }



const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) { //(&& means:dono condition true to run   hoga)
    console.log("Allow to buy course");
}
else {
    console.log("Not allow");
}


const loggedInFromGoogle = false;
const loggedInFromGmail = true;

if (loggedInFromGmail || loggedInFromGoogle) {  //(|| mean: dono me se ek bhi true honi chye)
    console.log("User LoggedIn");
}
else {
    console.log("not");
}