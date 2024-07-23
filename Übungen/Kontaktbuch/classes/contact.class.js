
class Contact {
    firstName;
    lastName;
    number;

    constructor(firstName, lastName, number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.number = number;
    }

    printFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    call() {
        window.location.href = 'tel:' + this.number;
    }

    changeLastName(newLastName) {
        this.lastName = newLastName;
    }
}