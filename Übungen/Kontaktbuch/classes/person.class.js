
class Person {
    firstName;
    lastName;

    constructor(firstName, lastName, number) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    changeLastName(newLastName) {
        this.lastName = newLastName;
    }
}