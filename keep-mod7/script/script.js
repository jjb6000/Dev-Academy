
// Input functionality 



//  ANCHOR var
let newNotesArray = [];
let newLine = document.getElementById('newLine');
let temporaryCard = document.getElementById('arrayContainer');
let checkboxSwitch = false; //default checkbox setting
let checkboxClass = 'checkbox-false'; //default checkbox setting
let noteText = document.getElementById('noteTextbox');
let list = true // default input setting
let addOverlay
const listBtn = document.getElementById('listBtn');
const textBtn = document.getElementById('textBtn');
const switchImg = document.getElementById('switchImg');
const boxMenu = document.getElementById('boxMenu');



// ANCHOR trigger to fill temporary array
// when you hover over Speichern -> pushToTempArray()
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


// ANCHOR fill temparray from list or from description

// fills the temporary array onchange input field or called by events above
function pushToTempArray() {
    newNotesArray.push(newLine.value);
    renderTemporaryCard();
}

// text to array
function descriptionInTempArray() {

    if (noteText.value === '') {
        alert('Gib eine Notiz ein!');
    } else {
        newNotesArray = [noteText.value];
    }
}


// ANCHOR render temporary card
// renders the array above the input field as draft card
function renderTemporaryCard() {

    temporaryCard.innerHTML = '';

    for (let i = 0; i < newNotesArray.length; i++) {

        temporaryCard.innerHTML += /*html*/`
        <div class="d-flex">
        <img class="${checkboxClass}" src="img/check_box_blank.svg" alt="">
        <input onchange="updateTempArray(${i}, 'newLine_${i}')" class="note width-500" value="${newNotesArray[i]}" type="text" name="Notizeingabe" id="newLine_${i}" required>
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


// ANCHOR switches for input menu: text, list, checkboxen on off

// switch to entering a text instead of a list
function switchToText() {
    temporaryCard.innerHTML = /*html*/`
            <textarea placeholder="Notiz schreiben..." class="note textbox" onchange="descriptionInTempArray()" name="Text" id="noteTextbox" ></textarea>
        `; 
    noteText = document.getElementById('noteTextbox');
    newNotesArray = [];
    checkboxSwitch = false;
    switchImg.src = 'img/check_box_blank.svg'
    checkboxClass = 'checkbox-false';
    newLine.classList.add('d-none');
    boxMenu.classList.add('d-none');
    listBtn.classList.remove('underline');
    textBtn.classList.add('underline');
    if (noteText !== null) {
        noteText.value = '';
    }  
    list = false;
}


// switch back to list
function switchToList() {
    temporaryCard.innerHTML = /*html*/`
    <textarea placeholder="Notiz schreiben..." class="note textbox d-none" onchange="descriptionInTempArray()" name="Text" id="noteTextbox" ></textarea>
    `;
    newNotesArray = [];
    newLine.classList.remove('d-none');
    boxMenu.classList.remove('d-none');
    listBtn.classList.add('underline');
    textBtn.classList.remove('underline');
    list = true;
}



// to switch on/off the checkbox 
function switchBox() {

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



// ANCHOR mobile save button
function mobileInput(status) {
    addOverlay = status
    let menu = document.getElementById('cardForm');
    let addButton = document.getElementById('addButton');
    let addBtnImg = document.getElementById('addBtnImg')

    if (addOverlay === 'open') {
        menu.classList.remove('hide-on-mobile');
        addButton.setAttribute('onclick', 'addArrayToObject()');
        addBtnImg.src = 'img/save.svg';
    }

    if (addOverlay === 'close') {
        menu.classList.add('hide-on-mobile');
        addButton.setAttribute("onclick", "mobileInput('open')");
        addBtnImg.src = 'img/add_mobile.svg';
    }

}
