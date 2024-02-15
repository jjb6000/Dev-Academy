let notesObject = JSON.parse(localStorage.getItem('notesObject')) || {}

//  loads notes from local storage and renders into card-container


if (localStorage.getItem('notesObject') !== null) {
    loadNotes();
}

function loadNotes() {

    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = ''

    for (let key in notesObject) {
        cardsContainer.innerHTML +=/*html*/`
                <div id=${key} class="card rounded float">
                    <div class="card-header">
                        <h3>${notesObject[key].Title}</h3>
                        <img class="click-icon" onclick="moveCardToBin('${key}')" src="img/bin.svg" alt="delete">
                    </div>
                </div>
        `;

        let notes = notesObject[key].Notes;
        let noteLine = document.getElementById(key);

        for (let i = 0; i < notes.length; i++) {
            noteLine.innerHTML += /*html*/`
                <div class="note">${notes[i]}</div>
            `;

        }

    }
}
