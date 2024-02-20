let defaultMenu = true // default for side menu

function changeMenu() {
    let spanElements = document.getElementsByClassName('hide-with-burger-btn');
    let menuItems = document.getElementsByClassName('menu-item');

    if (defaultMenu === true) {

        for (let i = 0; i < spanElements.length; i++) {
            spanElements[i].classList.add('d-none');
        }
    
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.add('alternative-menu-item');
        }

        defaultMenu = false;

    } else {

        for (let i = 0; i < spanElements.length; i++) {
            spanElements[i].classList.remove('d-none');
        }
    
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('alternative-menu-item');
        }

        defaultMenu = true;
        
    }

}