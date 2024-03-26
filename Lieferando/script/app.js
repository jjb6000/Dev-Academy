// ANCHOR menu bar
function loadMenu(jsonArray) {
    menuItems.innerHTML = '';
    currentMenu = jsonArray;
    for (let i = 0; i < jsonArray.length; i++) {
        menuItems.innerHTML += generateMenuHtml(jsonArray[i]['name'], jsonArray[i]['ingredients'], convertToGermanTypeFloat(jsonArray[i]['price']), i);
    }
    checkMenuBar();
}


// e Function because more menus can be added to the menusbar
menuBar.addEventListener('click', (e) => {
    if (e.target.id == 'menuBar') {
        return
    } else {
        underlineMenu(e.target.id);
    }
});


window.addEventListener('resize', checkMenuBar)


function underlineMenu(menu) {
    let menuSliders = document.getElementsByClassName('menu-bar')[0].children;
    if (menuSliders[0].id == 'menuBtn') {
        return
    } else {
        for (let i = 0; i < menuSliders.length; i++) {
            menuSliders[i].classList.remove('text-underline');
        }
        document.getElementById(menu).classList.add('text-underline');
    }
}


function checkMenuBar() {
    if (menuBar.scrollWidth - menuBar.clientWidth > 0) {
       menuBar.innerHTML = generateMobileMenuBar();
       menuBar.classList.add('flex-col');
    } else {
       menuBar.innerHTML = generateDesktopMenuBar(); 
       menuBar.classList.remove('flex-col'); 
    }
}


function openMobileMenu() {
    menuBar.innerHTML = generateMobileMenu();
}


function closeMobileMenu() {
        menuBar.innerHTML = generateMobileMenuBar();
}


// ANCHOR array functions
function arrayPush(array, value) {
    array.push(value);
}


function arraySplice(array, value) {
    array.splice(value, 1);
}





