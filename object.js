//abject ko define krte hai ek literal ke trah or ek constructor ke trah
//singleton-constructor se obj bnta hai to wha singleton hota hai(litral se nhi );
/*object syntax ;
1.Literal:
const  user = {} */

const insta_User = {
    name: "Arman",
    age: 22,
    Location: "Nawada",
    email: "arman@gmail.com",
    isLoggin: false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(insta_User);
console.log(insta_User.email);

insta_User.greeting = function () {
    console.log("Hello");


}
console.log(insta_User.greeting());
insta_User.greeting2 = function () {
    console.log(`Hello,  ${this.name}`);
}
console.log(insta_User.greeting2());