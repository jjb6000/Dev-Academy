
// menuObject contains the ID of elements that should be translated as key / value is arry with translations
let languageObject = {
    "subtitle": ["THE BEST RAMEN IN TOWN", "BESTER RAMEN DER STADT"],
    "orderH2": ["HOW TO ORDER", "SO BESTELLST DU"],
    "order1": ["Pick your noodle", "Wähle deine Nudeln"],
    "order2": ["Pick your broth", "Wähle deine Bouillon"],
    "order3": ["Add your toppings", "Wähle deine toppings"],
    "chicken1": ["CHICKEN", "HÜNCHEN"],
    "chicken2": ["CHICKEN", "HÜNCHEN"],
    "chicken3": ["CHICKEN", "HÜNCHEN"],
    "beef1": ["BEEF", "RINDFLEISCH"],
    "beef2": ["BEEF", "RINDFLEISCH"],
    "beef3": ["BEEF", "RINDFLEISCH"],
    "shrimp1": ["SHRIMP", "GARNELEN"],
    "shrimp2": ["SHRIMP", "GARNELEN"],
    "shrimp3": ["SHRIMP", "GARNELEN"],
    "menu": ["OUR MENU", "UNSER MENÜ"],
    "location": ["FIND US AT", "KOMM VORBEI"]
}

// key = id | 0 = EN | 1 = GER
function translator(int) {

    for (let key in languageObject) {

        document.getElementById(key).innerHTML = languageObject[key][int]

    }

}