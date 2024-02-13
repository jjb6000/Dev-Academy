let newNotesArray = [];
const newLine = document.getElementById('newLine');
const temporaryCard = document.getElementById('arrayContainer')

newLine.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' ) {
        if (newLine.value !== '') {
            newNotesArray.push(newLine.value);
            console.log(newNotesArray);
            renderTemporaryCard();
        } else {
            alert('Schreibe eine zuerst eine Notiz')
        }
    }
});


function renderTemporaryCard() {

    temporaryCard.innerHTML = '';
    
    for (let i = 0; i < newNotesArray.length; i++) {
        
        temporaryCard.innerHTML += /*html*/`
        <input onchange="updateTempArray(${i}, 'newLine_${i}')" class="empty-note note-text" value="${newNotesArray[i]}" type="text" name="Notizeingabe" id="newLine_${i}" required>
    `;   
    }
    newLine.value = '';
}

function updateTempArray(i, id) {
    console.log(document.getElementById(id).value);
    newNotesArray[i] = document.getElementById(id).value;
}


