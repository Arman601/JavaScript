// //forEach Loop

const coding = ["js", "c++", "java", "Python"];
coding.forEach(function (items) {
    // console.log(items);
})


//forEach loop with arrow func
const number = [1, 2, 3, 4, 5];
number.forEach((num) => {
    // console.log(num);

})



//object inside the array
const mycoding = [
    {
        languageName: "javaScript",
        FileName: "js",
    },
    {
        languageName: "java",
        FileName: "java",
    },
    {
        languageName: "c++",
        FileName: "cpp",
    },


]
mycoding.forEach((items) => {


    console.log("pgm_Language", items.languageName);
    // console.log("file_Name", items.FileName);




})




