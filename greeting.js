function greeter1(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.getElementById("1").innerText = greeter1(user);
