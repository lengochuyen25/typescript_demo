interface Person {
    firstName: String;
    lastName: String;
}

function greeter1(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

let user = {firstName: "Jane", lastName: "User"};

document.getElementById("1").innerText = greeter1(user);



