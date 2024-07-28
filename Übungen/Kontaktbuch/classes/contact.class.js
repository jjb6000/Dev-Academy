
class Contact extends Person {
    number;
    email;

    constructor(firstName, lastName, number, email) {
        super(firstName, lastName)
        this.number = number;
        this.email = email;
    }

    call() {
        window.location.href = 'tel:' + this.number;
    }

    mail() {
        window.location.href = 'mailto:' + this.email;
    }
}