
function addOrRemoveClasses(set, id, cssClass) {
    const setClass = {
        'remove': () => {document.getElementById(id).classList.remove(cssClass)},
        'add': () => {document.getElementById(id).classList.add(cssClass)}
    }
    setClass[set]();
}


function setIcon(id, src) {
    document.getElementById(id).src = src;
}


function firstSite() {
    return apiDataCards.previous == null;
}


function lastSite() {
    return apiDataCards.next == null;
}


function putTypesInArray(array) {
    let types = [];
    for (let i = 0; i < array.length; i++) {
        types.push(array[i].type.name);
    }
    return types;
}


function addTypeTags(array, id) {
    for (let i = 0; i < array.length; i++) {
        document.getElementById(id).innerHTML += loadTagHTML(array[i]);
    }
}


function convertToString(array) {
    return array.toString().replaceAll(',', ', ')
}


function defineColor(id, type) {
    document.getElementById(id).style.backgroundColor = TYPE_COLORS[type];
}


function upperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function stopP(event) {
    event.stopPropagation();
}


