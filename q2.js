[];
// assign interface/type to the function definition properly
function findTopNames(students) {
    var a = students.filter(function (b) { return b.score > 8; });
    return a.map(function (c) { return c.name; });
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
