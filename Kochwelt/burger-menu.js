

function openMenu() {
    mobileMenu = document.getElementById('navbar-mobile');
    mobileMenu.style.display = "flex";

    mobileMenu.innerHTML = /*html*/`
                <img onclick="closeMenu(mobileMenu)" class="closeBurger" src="img/icons/close.svg" alt="close menu">
                <a href="index.html" class="navlink-mobile">Start</a>
                <a href="rezept-moussaka.html" class="navlink-mobile">Rezept des Tages</a>
                <a href="contact.html" class="navlink-mobile">Kontakt</a>
                <a href="#" class="navlink-mobile">Impressum</a>
    `
}

function closeMenu(mobileMenu) {
    mobileMenu.innerHTML = /*html*/`  `;
    mobileMenu.style.display = "none"
}


