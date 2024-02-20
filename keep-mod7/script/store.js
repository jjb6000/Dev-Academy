

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
        saveNoteObject(true); // with true -> location reload = empty input card
    }
    
} 


function getCardIndexForUniqueID(title) {
    let cardsContainer = document.getElementById('cardsContainer');
    
    newCardIndex = +cardsContainer.children.length + 1;
    cardID = title + newCardIndex;
    
    return cardID.replace(/\s+/g, '');
}


function saveNoteObject(reload) {
    localStorage.setItem('notesObject', JSON.stringify(notesObject));
    loadNotes();

    if (reload === true) {
        location.reload();
    }

    document.getElementById('titleInput').value = ''
    
}




// const testObject = {
//     Title_ID1: {
//         Title: 'Notiztitel',
//         Notes: ['xy', 'kochen', 'putzen', 'Bier trinken'],
//         checkbox: 'false'
//     },
//     Title_ID2: {
//         Title: 'Notiztitel xyz',
//         Notes: ['xy', 'kochen', 'Bier trinken'],
//         checkbox: 'true'
//     }
//   };