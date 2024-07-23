let contacts = [
    new Contact('Jonas', 'Benkwitz', '+49167386425'),
    new Contact('Varvara', 'Kovaleva', '+491621303278')
];


function addContact(firstName, lastName, number) {
    let newContact = new Contact(firstName, lastName, number);
    contacts.push(newContact);
    addContactToList();
}



function addContactToList() {
    let contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contacts.forEach((contact, i) => {
        contactList.innerHTML += addContactToListHTML(contact.firstName, contact.lastName, contact.number, i);
    })
}



function addContactToListHTML(firstName, lastName, number, index) {
    return /*html*/`
        <div id="c${index}" class="contact-container">
            <p>${firstName} ${lastName}</p>
            <p>Tel: ${number}</p>
        </div>
    `
}


document.getElementById('addForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addContact(document.getElementById('fNameInput').value, document.getElementById('lNameInput').value, document.getElementById('telInput').value);
    ['fNameInput', 'lNameInput', 'telInput'].forEach(id => document.getElementById(id).value = '');
});