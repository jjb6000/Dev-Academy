let open = false 

function isItOpen () {
    if (open === false) {
        openMenu();
    } else {
        closeMenu();
    }
} 

function openMenu() {
    document.getElementById('navbar-mobile').classList.add('show-mobile-nav');
    open = true;
}

function closeMenu() {
    document.getElementById('navbar-mobile').classList.remove('show-mobile-nav');
    open = false;
}


