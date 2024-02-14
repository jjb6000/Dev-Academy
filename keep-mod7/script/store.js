const newTtile = document.getElementById('titleInput');
let notesObject = JSON.parse(localStorage.getItem('notesObject')) || {}


function addArrayToObject() {
    if (newTtile.value === '' || newNotesArray.length === 0) {
        alert('Deine Notiz braucht mindestestens einen Titel und einen Eintrag!')
    } else {
        console.log('to save:', newNotesArray);
        getCardIndexForUniqueID();
    }
    
} 


function getCardIndexForUniqueID() {
    let cardsContainer = document.getElementById('cardsContainer');
    newCardIndex = +cardsContainer.children.length + 1
    console.log(newCardIndex);
}


function saveObject() {

}