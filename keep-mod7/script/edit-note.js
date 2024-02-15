
// to edit and move (to bin) notes

let binObject = JSON.parse(localStorage.getItem('binObject')) || {}

function moveCardToBin(id) {
    binObject[id] = notesObject[id];
    delete notesObject[id];

    localStorage.setItem('binObject', JSON.stringify(binObject));

    saveNoteObject();
}