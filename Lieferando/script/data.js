const menuItems = document.getElementById('menuItems');
const basketItems = document.getElementById('basketItems');
const sumContainer = document.getElementById('sumContainer');
let currentMenu;
let basketObject = {
    names: [],
    prices: [],
    amounts: []
}


let menuBurger = [
    {
        name: 'Hamburger',
        ingredients: 'Fleisch, Gurke, Zwiebeln, Saucen',
        price: 8.90
    },    
    {
        name: 'Cheeseburger',
        ingredients: 'Fleisch, Käse, Gurke, Zwiebeln, Saucen',
        price: 9.90
    },    
    {
        name: 'Bacon Burger',
        ingredients: 'Fleisch, Bacon, Käse, Gurke, Zwiebeln, Saucen',
        price: 10.90
    },    
    {
        name: 'Mediterran Burger',
        ingredients: 'Fleisch, Mozzarella, Ruccoula, Zucchini, Zwiebeln, Saucen',
        price: 13.90
    },    
    {
        name: 'Double McHeart-Attack',
        ingredients: '2x Fleisch, Bacon, Käse, Gurke, Zwiebeln, Saucen',
        price: 13.90
    },    
    {
        name: 'Veggie Burger',
        ingredients: 'Riesen-Champignon, Käse, Gurke, Zwiebeln, Saucen',
        price: 13.90
    }
];


let menuHotDog = [
    {
        name: 'Classic Hot dog',
        ingredients: 'Wurst, geröstete Zwiebeln, Gurken, Senf, Ketchup, Hot dog sauce',
        price: 6.99
    },
    {
        name: 'NY Hot dog',
        ingredients: 'Wurst, geröstete Zwiebeln, Sauerkraut, Senf, Ketchup, Hot dog sauce',
        price: 7.99
    },
    {
        name: 'NY red dog',
        ingredients: 'Wurst, geröstete Zwiebeln, Rotkohl, Senf, Ketchup, Hot dog sauce',
        price: 7.99
    },
    {
        name: 'Chillie cheese dog',
        ingredients: 'Wurst, Chillie con carne, Hot dog sauce, Käse',
        price: 10.99
    }
];


let menuPommes = [
    {
        name: 'Pommes Frites',
        ingredients: 'Kartoffeln, Salz, Ketchup, Majo',
        price: 4.99
    },
    {
        name: 'Süßkartoffel Pommes',
        ingredients: 'Süßkartoffeln, Salz, Ketchup, Majo',
        price: 5.99
    },
    {
        name: 'Chillie cheese Pommes',
        ingredients: 'Kartoffeln, Chillie con carne, Käse',
        price: 6.99
    }
];


let menuSalads = [
    {
        name: 'Classic',
        ingredients: 'Gurke, Tomate, Kraut, Feldsalat, Dressing',
        price: 4.99
    },
    {
        name: 'Krautsalat',
        ingredients: 'Kraut, Dressing',
        price: 4.99
    },
    {
        name: 'Tomatensalat',
        ingredients: 'Tomate, Zwiebel, Dressing',
        price: 4.99
    }
];