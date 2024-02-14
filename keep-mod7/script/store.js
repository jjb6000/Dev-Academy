

// stores an Object with notes in localstorage


const newTtile = document.getElementById('titleInput');

function addArrayToObject() {
    if (newTtile.value === '' || newNotesArray.length === 0) {
        alert('Deine Notiz braucht mindestestens einen Titel und einen Eintrag!')
    } else {
        saveObject(getCardIndexForUniqueID(newTtile.value), newTtile.value, newNotesArray);
    }
    
} 


function getCardIndexForUniqueID(title) {
    let cardsContainer = document.getElementById('cardsContainer');
    newCardIndex = +cardsContainer.children.length + 1;
    cardID = title + newCardIndex;
    return cardID.replace(/\s+/g, '');
}


function saveObject(id, title, notes) {

    notesObject[id] = {
        Title: title,
        Notes: notes
    };

    localStorage.setItem('notesObject', JSON.stringify(notesObject));

    loadNotes();

    location.reload()
}


const testObject = {
    Title_ID1: {
        Title: 'Notiztitel',
        Notes: ['xy', 'kochen', 'putzen', 'Bier trinken']
    },
    Title_ID2: {
        Title: 'Notiztitel xyz',
        Notes: ['xy', 'kochen', 'Bier trinken']
    }
  };