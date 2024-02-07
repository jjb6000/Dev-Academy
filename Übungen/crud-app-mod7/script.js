let names = JSON.parse(localStorage.getItem('names')) || [];
let phoneNumbers = JSON.parse(localStorage.getItem('phoneNumbers')) || [];

function render() {
    let content = document.getElementById('content');

    content.innerHTML = /*html*/``;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phonbeNumber = phoneNumbers[i];

        content.innerHTML += /*html*/`
            <div class="card">
                <div>
                    <b>Name: </b>${name}<br>
                    <b>Telefon: </b>${phonbeNumber}<br>
                </div>
                <div>
                    <img onclick="deleteContact(${i})" src="img/close.svg" alt="Kontakt löschen">
                </div>

            </div>
            `;
        
    }

}

function save() {
    let storedNames = JSON.stringify(names);
    let storedNumbers = JSON.stringify(phoneNumbers);

    localStorage.setItem('names', storedNames);
    localStorage.setItem('phoneNumbers', storedNumbers);
}


function addContact() {
    let newName = document.getElementById('nameInput').value;
    let newNumber = document.getElementById('numberInput').value;

    names.push(newName);
    phoneNumbers.push(newNumber);

    document.getElementById('nameInput').value = '';
    document.getElementById('numberInput').value = '';
    save();


    render();
}

function deleteContact(i) {
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);
    save();


    render();
}
