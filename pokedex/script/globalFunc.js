
function addOrRemoveClasses(set, id, cssClass) {
    const setClass = {
        'remove': () => {document.getElementById(id).classList.remove(cssClass)},
        'add': () => {document.getElementById(id).classList.add(cssClass)}
    }
    setClass[set]();
}
