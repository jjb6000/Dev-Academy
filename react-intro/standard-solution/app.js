

function createCard(textfieldId, selectfieldId) {
    const text = document.getElementById(textfieldId);
    const color = document.getElementById(selectfieldId);

    document.querySelector('.module-container').innerHTML += cardHTMLTemplate(text.value, color.value)
    text.value = '';
    color.value = '';
}


function cardHTMLTemplate(text, color) {
    return /*html*/`
        <div class="module">
            <div class="module-img" style="background-color:${color};"></div>
            <div class="module-text">
                <p>${text}</p>
            </div>
        </div>
    `
}