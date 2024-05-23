let outputContainer = document.getElementById('outputContainer');
const FIREBASE = 'https://devacademytest-45922-default-rtdb.europe-west1.FIREBASEdatabase.app/';
let user;


function getEndpoint(e) {
    let mail = e.srcElement[0].value;
    let url = FIREBASE + mail.replaceAll('.', '--dot--').toLowerCase() + '/';
    console.log(url);
    getInfo(url)
}


async function getInfo(endpoint) {
    user = await getData(endpoint);
    outputContainer.innerHTML = userTemplateHTML(user.name, user.city, user.pet);
}


async function getData(url) {
    let data = await fetch(url + ".json").catch(errorFunction);
    return await data.json();
}


async function postData(url) {
    let data = await fetch(url + ".json").catch(errorFunction);
    return await data.json();
}


function errorFunction() {
    console.error('Fehler aufgetreten',);
    outputContainer.innerHTML = 'Oops something went wrong, please try again later'
}




function userTemplateHTML(name, city, pet) {
    return /*html*/`
        <p>Name: ${name}</p>
        <p>Stadt: ${city}</p>
        <p>Haustier: ${pet}</p>
    `
}