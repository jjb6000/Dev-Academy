const outputContainer = document.getElementById('outputContainer');
const messageContainer = document.getElementById('messageContainer');
const FIREBASE = 'https://devacademytest-45922-default-rtdb.europe-west1.FIREBASEdatabase.app/';
let user;

document.getElementById('createForm').addEventListener('submit', event => {
    event.preventDefault();
    setUser(event);
})


function getEndpoint(string) {
    let endpoint = FIREBASE + string.replaceAll('.', '--dot--').toLowerCase() + '/';
    return endpoint;
}


async function getInfo(e) {
    let endpoint = getEndpoint(e.srcElement[0].value);
    user = await getData(endpoint);
    outputContainer.innerHTML = userTemplateHTML(user.name, user.city, user.pet);
}


function setUser(e) {
    let newEndpoint = getEndpoint(e.srcElement[1].value);
    let user = new User(e.srcElement[0].value, e.srcElement[2].value, e.srcElement[3].value);
    putData(newEndpoint, user);
}


async function getData(url) {
    let response = await fetch(url + ".json").catch(errorFunction);
    console.log(response.status);
    showStatus(response.status);
    return await response.json();
}


async function putData(url, data={}) {
    let response = await fetch(url + ".json", {
        method: 'PUT',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch(errorFunction);
    console.log(response.status);
    showStatus(response.status);
    return await response.json();
}


function deleteUser(e) {
    let endpoint = getEndpoint(e.srcElement[0].value);
    deleteData(endpoint)
}


async function deleteData(url) {
    let response = await fetch(url + ".json", {
        method: 'DELETE'
    }).catch(errorFunction);
    console.log(response.status);
    showStatus(response.status);
    return await response.json();
}


function errorFunction() {
    console.error('Fehler aufgetreten',);
    outputContainer.innerHTML = 'Oops something went wrong, please try again later'
}


// function showStatus(statusCode) {
//     if (statusCode == 200) {
//         messageContainer.innerHTML = 'Anfrage erfolgreich!'
//     } else {
//         messageContainer.innerHTML = 'Etwas ist schief gelaufen'
//     }
// }




function userTemplateHTML(name, city, pet) {
    return /*html*/`
        <p>Name: ${name}</p>
        <p>Stadt: ${city}</p>
        <p>Haustier: ${pet}</p>
    `
}