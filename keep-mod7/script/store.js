

// stores an Object with notes in localstorage


let newTtile = document.getElementById('titleInput');

function addArrayToObject() {
    if (newTtile.value === '' || newNotesArray.length === 0) {
        alert('Deine Notiz braucht mindestestens einen Titel und einen Eintrag!')
    } else {
        
        notesObject[getCardIndexForUniqueID(newTtile.value)] = {
            Title: newTtile.value,
            Notes: newNotesArray,
            checkbox: checkboxClass,
            toDoDone: []
        };
        saveNoteObject(); // with true -> location reload = empty input card
    }
    
} 


function getCardIndexForUniqueID(title) {
    let cardsContainer = document.getElementById('cardsContainer');
    
    newCardIndex = +cardsContainer.children.length + 1;
    cardID = title + newCardIndex;
    
    return cardID.replace(/\s+/g, '');
}


function saveNoteObject() {
    localStorage.setItem('notesObject', JSON.stringify(notesObject));
    loadNotes();

    if (list === true) {
        temporaryCard.innerHTML = /*html*/`
            <textarea placeholder="Notiz schreiben..." class="note textbox d-none" onchange="descriptionInTempArray()" name="Text" id="noteTextbox" ></textarea>
        `
    } else {
        noteText.value = ''
    }

    document.getElementById('titleInput').value = '';
    newNotesArray = []

    if (addOverlay === 'open') {
        mobileInput('close');
    }
    
}



