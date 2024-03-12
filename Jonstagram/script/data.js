
// load global variables
let posts
let likeBtn 
let commentsID 
let commentsBtnID 
let commentsIconID
let InputID 


// check localstorage
if (localStorage.getItem('Jonstagram') === null) {
    defineInitialJsonArray();
    savePostsToLS();
} else {
    loadPostsFromLS();
}


function savePostsToLS() {
    localStorage.setItem('Jonstagram', JSON.stringify(posts));
}


function loadPostsFromLS() {
    posts = JSON.parse(localStorage.getItem('Jonstagram'));
}





function defineInitialJsonArray() {
    posts = [
        {
            author: 'Jonas Benkwitz',
            logo: 'img/jonas.png',
            location: 'Berlin, Deutschland',
            img: 'img/pexels-kyle-miller-20272801.jpg',
            like: false,
            likes: '24',
            headline: 'Hier steht eine sehr gute Headline',
            comments: ['Was für ein tolles stock foto. Das Beste wo gibt.', 'Mehr davon!', 'das fetzt!']
        },
        {
            author: 'Kochwelt',
            logo: 'img/logo_kochwelt.png',
            location: 'München, Deutschland',
            img: 'img/pasta.jpg',
            like: false,
            likes: '2456',
            headline: 'Probiere das neueste Rezept von Kochwelt! <a class="link-text" target="_blank" href="https://kochwelt-8.developerakademie.net/index.html">zur Kochweltseite</a>',
            comments: ['sehr lecker', 'Hätte nicht gedacht, dass ich das so einfach nachkochen kann', 'Ich mag lieber Spaghetti mit Ketchup']
        },
        {
            author: 'Jonas keeps',
            logo: 'img/logo-note.png',
            location: 'Silicon Valley, USA',
            img: 'img/Screenshot-note.png',
            like: false,
            likes: '16056',
            headline: 'Die neue App für deine Notizen! <a class="link-text" target="_blank" href="https://jonas-benkwitz.developerakademie.net/notes/index.html">Probiere es aus</a>',
            comments: ['funktioniert super', 'komisch, sieht fast so aus wie google keep!?', 'Ich mag lieber Spaghetti mit Ketchup']
        }
    ]
}