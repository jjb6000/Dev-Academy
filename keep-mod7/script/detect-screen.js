
// detection of screensize because different input card used for mobile -> reload of input variables needed


function checkScreen() {
    if (window.screen.availWidth <= 980) {
        loadMenuForMobile();
    }

    if (window.screen.availWidth >= 980) {
        loadMenuForDesktop();
    }
} 

function loadMenuForMobile() {
    document.getElementById('cardForm').innerHTML = '';
    document.getElementById('mobileForm').innerHTML = /*html*/`
        <div class="d-flex input-menu-mobile">
                    <button id="saveButton" onclick="addArrayToObject(); return false"
                        class="note-button mobile-btn">Speichern</button>
                    <div class="d-flex check-menu-mobile">
                        <img onclick="switchBox()" id="switchImg" class="checkbox-menu" src="img/check_box_blank.svg"
                            alt="checkbox-schalter">
                        <button id="checkSwitch" onclick="switchBox(); return false"
                            class="note-button check-switch mobile-btn">checkbox</button>
                    </div>
                    <button id="close" onclick="mobileInput('close'); return false"
                        class="note-button mobile-btn">Abbrechen</button>
                </div>

                <input class="note note-title" placeholder="Titel" type="text" id="titleInput">
                <div id="arrayContainer"></div>
                <input class="note note-text" onchange="pushToTempArray()"
                    placeholder="Notiz schreiben und bestätigen..." type="text" name="Notizeingabe" id="newLine">
    `;
    reAssignVariables()
}

function loadMenuForDesktop() {
    console.log('Desktop', window.screen.availWidth);
    document.getElementById('mobileForm').innerHTML = '';
    document.getElementById('cardForm').innerHTML = /*html*/`
                        <input class="note note-title" placeholder="Titel" type="text" id="titleInput">
                <div id="arrayContainer"></div>

                <input class="note note-text" onchange="pushToTempArray()"
                    placeholder="Notiz schreiben und bestätigen..." type="text" name="Notizeingabe" id="newLine">

                <div class="d-flex input-menu">
                    <img onclick="switchBox()" id="switchImg" class="checkbox-menu" src="img/check_box_blank.svg"
                        alt="checkbox-schalter">
                    <button id="checkSwitch" onclick="switchBox(); return false"
                        class="note-button check-switch">checkbox</button>
                    <button id="saveButton" onclick="addArrayToObject(); return false" class="note-button">Speichern &
                        schließen</button>
                </div>
    `;
    reAssignVariables();
}



function reAssignVariables() {
    newLine = document.getElementById('newLine');
    temporaryCard = document.getElementById('arrayContainer');
    newTtile = document.getElementById('titleInput');
}