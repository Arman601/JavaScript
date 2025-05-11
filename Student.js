//Student data
let Student = {
    name: "Arman",
    roll: 55,
    Address: "Nawada",
    Mob_No: 9608079847

}

function Student_Details(anyobj) {
    console.log("****STUDENT DETAILS****");
    console.log(`Name:${anyobj.name} Roll:${anyobj.roll} Address:${anyobj.Address} Mob_no:${anyobj.Mob_No}`)
}
Student_Details(Student);
