class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
// interface Person {
//     firstName: string;
//     lastName: string;
// }
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user1 = new Student("Huyen", "M.", "User");

document.getElementById("2").innerText = greeter(user1);