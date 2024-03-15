
// load global variables
let posts;
let likeBtn;
let commentsID;
let commentsBtnID;
let commentsIconID;
let InputID;
let likeSrc;
let cardSection = document.getElementById('cardSection');
let initialPostsJsonArray = [
    {
        author: 'Jonas Benkwitz',
        date: 'March 1, 2024 14:15:30',
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
        date: 'March 2, 2024 16:30:30',
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
        date: 'March 8, 2024 11:15:30',
        logo: 'img/logo-note.png',
        location: 'Silicon Valley, USA',
        img: 'img/Screenshot-note.png',
        like: false,
        likes: '16056',
        headline: 'Die neue App für deine Notizen! <a class="link-text" target="_blank" href="https://jonas-benkwitz.developerakademie.net/notes/index.html">Probiere es aus</a>',
        comments: ['funktioniert super', 'komisch, sieht fast so aus wie google keep!?', 'Ich mag lieber Spaghetti mit Ketchup']
    }
];


// check localstorage
if (localStorage.getItem('Jonstagram') === null) {
    posts = initialPostsJsonArray;
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



// ANCHOR time functions
function dateFunction(index) {
    const postDate = new Date(posts[index].date);
    const today = new Date(Date.now());
    let timeBetween = timeDiff(postDate, today, 86400000);
    let timeUnit = 'Tage'

    if (timeBetween == 0) {
        timeBetween = timeDiff(postDate, today, 3600000);
        timeUnit = 'Stunden'
    }
    if (timeBetween == 0) {
        timeBetween = timeDiff(postDate, today, 60000);
        timeUnit = 'Minuten'
    }

    let timeSincePost = timeBetween + ' ' + timeUnit;
    return timeSincePost;
}


function timeDiff(first, second, constant) {
    return Math.round((second - first) / (constant));
}



// ANCHOR html ID generator
function getIdsFromIndex(index) {
    cardID = addIndex('card');
    likeBtn = addIndex('like');
    likesID = addIndex('likes');
    commentsID = addIndex('comments');
    commentsBtnID = addIndex('commentsBtn');
    commentsIconID = addIndex('commentsIcon');
    InputID = addIndex('newCommentInput');                                          

    function addIndex(string) {
       return string + index
    }
}