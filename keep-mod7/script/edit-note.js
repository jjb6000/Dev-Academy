
// to edit and move (to bin) notes

let binObject = JSON.parse(localStorage.getItem('binObject')) || {}

function moveCardToBin(id) {
    binObject[id] = notesObject[id];
    delete notesObject[id];

    localStorage.setItem('binObject', JSON.stringify(binObject));

    saveNoteObject();
}

function done(key, i) {
    let todoArray = notesObject[key].Notes;
    let todo = notesObject[key].Notes[i];
    let doneArray = notesObject[key].toDoDone;

    doneArray.push(todo);
    todoArray.slice(i, 1);

    loadNotes();
    
}