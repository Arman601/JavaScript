//
let student = [
    { name: "Arman", roll: 55, class: 5 },
    { name: "Rizwan", roll: 20, class: 6 },
    { name: "Arman", roll: 40, class: 7 },
    { name: "Khan", roll: 50, class: 10 },
    { name: "kaif", roll: 60, class: 10 }

]

let detailss = student.filter((any) => any.name == "Arman");
console.log(detailss);
