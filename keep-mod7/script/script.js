
// Input functionality 


let newNotesArray = [];
const newLine = document.getElementById('newLine');
const temporaryCard = document.getElementById('arrayContainer')

document.getElementById('saveButton').addEventListener("mouseover", (event) => {
    if (newLine.value !== '') {
        pushToTempArray();
    }
})


// fills the temporary array when you press enter in the input field
newLine.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' ) {

        // calls render function when text not empty
        if (newLine.value !== '') {
            pushToTempArray();
        } else {
            alert('Schreibe eine zuerst eine Notiz!')
        }
    }
});

// fills the temporary array onchange input field or called by events above
function pushToTempArray() {
    newNotesArray.push(newLine.value);
    renderTemporaryCard();
}


// renders the array above the input field
function renderTemporaryCard() {

    temporaryCard.innerHTML = '';
    
    for (let i = 0; i < newNotesArray.length; i++) {
        
        temporaryCard.innerHTML += /*html*/`
        <input onchange="updateTempArray(${i}, 'newLine_${i}')" class="note" value="${newNotesArray[i]}" type="text" name="Notizeingabe" id="newLine_${i}" required>
    `;   
    }
    newLine.value = '';
}


// updates the temp array when a value was edited (gets index and ID from html onchange function); splice when input is empty
function updateTempArray(i, id) {
    let editedValue = document.getElementById(id).value
    if (editedValue === '') {
        newNotesArray.splice(i, 1)
        renderTemporaryCard();
    } else {
        newNotesArray[i] = editedValue;
    }
}


