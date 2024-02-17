let notesObject = JSON.parse(localStorage.getItem('notesObject')) || {}


if (localStorage.getItem('notesObject') !== null) {
    loadNotes();
}


//  loads notes from local storage and renders into card-container
function loadNotes() {

    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';

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
        let dones = notesObject[key].toDoDone;
        let noteLine = document.getElementById(key);

        for (let i = 0; i < notes.length; i++) {
            noteLine.innerHTML += /*html*/`
                <div class="note"><img onclick="done('${key}', '${notes[i]}')" class="${notesObject[key].checkbox}" src="img/check_box_blank.svg" alt="">${notes[i]}</div>
            `;

        }

        for (let i = 0; i < dones.length; i++) {
            noteLine.innerHTML += /*html*/`
                <div class="note line-through"><img onclick="returnToToDo('${key}', '${dones[i]}')" class="${notesObject[key].checkbox}" src="img/check_box.svg" alt="">${dones[i]}</div>
            `;

        }

    }
}
