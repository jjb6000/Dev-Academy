let newNotesArray = [];
const newLine = document.getElementById('newLine');
const temporaryCard = document.getElementById('arrayContainer')

// fills the temporary array when you press enter in the input field

function pushToTempArray() {
    newNotesArray.push(newLine.value);
    console.log(newNotesArray);
    renderTemporaryCard();
}

newLine.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' ) {

        // calls render function when text not empty
        if (newLine.value !== '') {
            newNotesArray.push(newLine.value);
            console.log(newNotesArray);
            renderTemporaryCard();
        } else {
            alert('Schreibe eine zuerst eine Notiz!')
        }
    }
});


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
    console.log(editedValue);
    if (editedValue === '') {
        newNotesArray.splice(i, 1)
        renderTemporaryCard();
    } else {
        newNotesArray[i] = editedValue;
    }
}


