/**
 * ${1:Description placeholder}
 *
 * @param {*} id
 * @param {*} todo
 * @returns {string}
 */
function generateCardHtml(id, todo) {
    return /*html*/`
        <div ondragstart="startDrag(event)" id="${id}" draggable="true" class="card">${todo}</div>
    `
}