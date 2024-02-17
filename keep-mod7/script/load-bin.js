

//  loads deleted notes from binObject in local storage and renders into card-container + full delete function

let notesObject = JSON.parse(localStorage.getItem('notesObject')) || {};

if (localStorage.getItem('binObject') !== null) {
    binObject = JSON.parse(localStorage.getItem('binObject'));
    loadBinNotes();
}

function loadBinNotes() {

    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = ''

    for (let key in binObject) {
        cardsContainer.innerHTML +=/*html*/`
                <div id=${key} class="card rounded float">
                    <div class="card-header">
                        <h3>${binObject[key].Title}</h3>
                        <div class="d-flex">
                        <img class="click-icon" onclick="cardDelete('${key}')" src="img/delete.svg" alt="löschen">
                        <img class="click-icon" onclick="cardRestore('${key}')" src="img/restore.svg" alt="wiederherstellen">
                        </div>
                    </div>
                </div>
        `;

        let notes = binObject[key].Notes;
        let noteLine = document.getElementById(key);
        let dones = binObject[key].toDoDone;

        for (let i = 0; i < notes.length; i++) {
            noteLine.innerHTML += /*html*/`
                <div class="note">${notes[i]}</div>
            `;

        }

        for (let i = 0; i < dones.length; i++) {
            noteLine.innerHTML += /*html*/`
                <div class="note line-through">${dones[i]}</div>
            `;

        }

    }
}

function cardDelete(id) {
    delete binObject[id];

    localStorage.setItem('binObject', JSON.stringify(binObject));

    location.reload();
}

function cardRestore(id) {
    notesObject[id] = binObject[id];
    localStorage.setItem('notesObject', JSON.stringify(notesObject));
    cardDelete(id);
}
