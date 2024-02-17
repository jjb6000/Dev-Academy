
// to edit and move (to bin) notes

let binObject = JSON.parse(localStorage.getItem('binObject')) || {}

function moveCardToBin(id) {
    binObject[id] = notesObject[id];
    delete notesObject[id];

    localStorage.setItem('binObject', JSON.stringify(binObject));

    saveNoteObject();
}


function done(key, element) {
    let todoArray = notesObject[key].Notes;
    let i = todoArray.indexOf(element);
    let todo = notesObject[key].Notes[i];
    let doneArray = notesObject[key].toDoDone;

    doneArray.push(todo);
    todoArray.splice(i, 1);

    notesObject[key].toDoDone = doneArray;
    notesObject[key].Notes = todoArray;

    saveNoteObject(false);
    
}

function returnToToDo(key, element) {
    let todoArray = notesObject[key].Notes;
    let doneArray = notesObject[key].toDoDone;
    let i = doneArray.indexOf(element);
    let todo = notesObject[key].toDoDone[i];

    todoArray.push(todo);
    doneArray.splice(i, 1);

    notesObject[key].toDoDone = doneArray;
    notesObject[key].Notes = todoArray;

    saveNoteObject(false);
}