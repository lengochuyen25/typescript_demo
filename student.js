var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// interface Person {
//     firstName: string;
//     lastName: string;
// }
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user1 = new Student("Huyen", "M.", "User");
document.getElementById("2").innerText = greeter(user1);
