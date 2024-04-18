const outputContainer = document.getElementById('output');
const input = document.getElementById('input');


function getURL() {
    let search = encodeURI(input.value)

    let url = 'https://www.openthesaurus.de/synonyme/search?q=' 
            +  search
            + '&format=application/json' ;
    init(url);
}



async function init(url) {
    let response = await fetch(url).catch(errorFunction);
    let synJson = await response.json();
    showSynos(synJson);
}

function errorFunction() {
    console.log('Fehler aufgetreten');
}


function showSynos(resp) {
    outputContainer.innerHTML = '';
    let synSets = resp.synsets

    for (let i = 0; i < synSets.length; i++) {
        outputContainer.innerHTML += synSetHeader(i+1);
        const sets = synSets[i];

        for (let j = 0; j < sets.terms.length; j++) {
            outputContainer.innerHTML += generateResult(sets.terms[j].term);   
        }
        outputContainer.innerHTML += generateLine(); 
    }
}





// ANCHOR TEMPLATE

function generateResult(syn) {
    return /*html*/`
        <ul>
            <li>${syn}</li>
        </ul>
    `
}


function generateLine() {
   return /*html*/`
    <div class="line"></div>
   ` 
}


function synSetHeader(i) {
    return /*html*/`
     <h4>Synonym-Set ${i}</h4>
    ` 
 }