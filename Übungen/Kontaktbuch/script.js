let contacts = [
    new Contact('Jonas', 'Benkwitz', '+49167386425', 'jb@gmail.com'),
    new Contact('Varvara', 'Kovaleva', '+491621303278', 'vk@gmail.com')
];


function addContact(firstName, lastName, number='unbekannt', email='unbekannt') {
    let newContact = new Contact(firstName, lastName, number, email);
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


function callContact(e) {
    contacts[e.target.parentNode.id].call();
}



function addContactToListHTML(firstName, lastName, number, index) {
    return /*html*/`
        <div id="${index}" class="contact-container">
            <p>${firstName} ${lastName}</p>
            <p>Tel: ${number}</p>
            <button onclick="callContact(event)">Anrufen</button>
        </div>
    `
}


document.getElementById('addForm').addEventListener('submit', e => {
    e.preventDefault();
    addContact(document.getElementById('fNameInput').value, document.getElementById('lNameInput').value, document.getElementById('telInput').value, document.getElementById('mailInput').value);
    ['fNameInput', 'lNameInput', 'telInput', 'mailInput'].forEach(id => document.getElementById(id).value = '');
});


