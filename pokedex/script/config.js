const cardSection = document.getElementById('cardSection');
const pokemonSection = document.getElementById('specs')
const labels = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'];
const resetBtn = document.getElementById('resetBtn');
// const moreBtn = document.getElementById('moreBtn');
const sliderMob = document.getElementById('sliderMob');
const pokeSearch = document.getElementById('pokeSearch');
const searchResults = document.getElementById('searchOutput');


class Card {
    constructor(name, types, image) {
        this.name = name;
        this.types = types;
        this.img = image;
    }
}


const appStatus = {
    openMenu: false,
    initialAmountOfCardsMinusFour: null,
    cardsInRow: null
}


// ANCHOR   GRAPH CONFIGS
const CONFIG_BG_COLOR = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
];

const CONFIG_BORDER_COLOR = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
];

const CONFIG_CHART_OPTIONS = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        }
    }
}


// ANCHOR TYPE COLORS
const TYPE_COLORS = {
    "normal": "#b9b896",
    "fire": "#FB6C6C",
    "water": "#76BDFE",
    "grass": "#48D0B0",
    "electric": "#FFD656",
    "ice": "#6ccff",
    "fighting": "#C22E28",
    "poison": "#A33EA1",
    "ground": "#E2BF65",
    "flying": "#A98FF3",
    "psychic": "#FF6EA8",
    "bug": "#4dd735",
    "rock": "#B6A136",
    "ghost": "#735797",
    "dragon": "#6F35FC",
    "dark": "#705746",
    "steel": "#B7B7CE",
    "fairy": "#D685AD"
  }