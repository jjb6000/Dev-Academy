
// Input functionality 



let newNotesArray = [];
let newLine = document.getElementById('newLine');
let temporaryCard = document.getElementById('arrayContainer');
let checkboxSwitch = false //default checkbox setting
let checkboxClass = 'checkbox-false' //default checkbox setting
let deafultMenu = true // default for side menu

// when you hover over Speichern & schließen -> pushToTempArray()
document.getElementById('saveButton').addEventListener("mouseover", (event) => {
    if (newLine.value !== '') {
        pushToTempArray();
    }
})


// when you press enter in the input field -> pushToTempArray()
newLine.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

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


// renders the array above the input field as draft card
function renderTemporaryCard() {

    temporaryCard.innerHTML = '';

    for (let i = 0; i < newNotesArray.length; i++) {

        temporaryCard.innerHTML += /*html*/`
        <div class="d-flex">
        <img class="${checkboxClass}" src="img/check_box_blank.svg" alt="">
        <input onchange="updateTempArray(${i}, 'newLine_${i}')" class="note" value="${newNotesArray[i]}" type="text" name="Notizeingabe" id="newLine_${i}" required>
        </div>
        
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

function switchBox() {

    const switchImg = document.getElementById('switchImg')

    if (checkboxSwitch === false) {
        checkboxSwitch = true;
        switchImg.src = 'img/check_box.svg';
        checkboxClass = 'checkbox-true';
        renderTemporaryCard();
    } else {
        checkboxSwitch = false;
        switchImg.src = 'img/check_box_blank.svg'
        checkboxClass = 'checkbox-false';
        renderTemporaryCard();
    }
}


function changeMenu() {
    let spanElements = document.getElementsByClassName('hide-with-burger-btn');
    let menuItems = document.getElementsByClassName('menu-item');

    if (deafultMenu === true) {

        for (let i = 0; i < spanElements.length; i++) {
            spanElements[i].classList.add('d-none');
        }
    
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.add('alternative-menu-item');
        }

        deafultMenu = false;

    } else {

        for (let i = 0; i < spanElements.length; i++) {
            spanElements[i].classList.remove('d-none');
        }
    
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('alternative-menu-item');
        }

        deafultMenu = true;
        
    }

}

function mobileInput(button) {
    let menu = document.getElementById('mobileForm');

    if (button === 'open') {
        menu.classList.remove('d-none');
    } 
    
    if (button === 'close') {
        menu.classList.add('d-none');
    }

}
