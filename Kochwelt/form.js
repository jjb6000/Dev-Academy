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
        // window.location.href = "./send_mail.html";
        document.getElementById('contactForm').innerHTML = /*html*/`
            <h2>Email ist Unterwegs</h2>
        `
    }).catch((error) => {
        console.log(error);
    });
}