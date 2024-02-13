
let form = document.getElementById('contactForm');

function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/moqgjyoo", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        // form = email unterwegs
        form.innerHTML = /*html*/`
            <h2>Email ist Unterwegs</h2>
        `;
        // 5 sekunden Verzögerung bis reloadForm funktion startet
        setTimeout(reloadForm, 5000);

    }).catch((error) => {
        console.log(error);
    });
}

function reloadForm () {
    form.innerHTML = /*html*/`
                <h2>Kontaktformular</h2>
            <div class="hero-content">
                <label>Deine email-Adresse:</label>
                <input class="contact-input" type="email" name="email" required>
            </div>

            <div class="hero-content">
                <label>Deine Nachricht:</label>
                <textarea class="contact-input height-300" name="message" required></textarea>
            </div>

            <button class="btn" type="submit">Senden</button>
    `
    
}