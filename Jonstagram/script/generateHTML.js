
function generateCardHtml(logo, author, location, img, like, headline, comment0, index) {
    let likeSrc

    if (like === true) {
        likeSrc = 'icons/like_FILL1.svg'
    } else {
        likeSrc = 'icons/like_FILL0.svg'
    }

    return /*html*/`
                <div class="card standard-border-style">

                    <div class="card-header">
                        <img class="profile-pic" src="${logo}" alt="Profilbild">
                        <div class="card-author-data">
                            <p class="highlighted-text fs-20 margin-0">${author}</p>
                            <p class="margin-0">${location}</p>
                        </div>
                        
                    </div>

                    <img class="post-img" src="${img}" alt="">

                    <div class="card-menu">
                        <img id="like${index}" onclick="likeFunction('${index}')" src="${likeSrc}" alt="Gefällt mir">
                        <img id="commentsIcon${index}" onclick="loadAllComments('${index}')" src="icons/comment.svg" alt="Kommentare ansehen">
                        <img src="icons/add_comment.svg" onclick="addCommentInput(${index})" alt="Kommentar hinzufügen">
                    </div>

                    <div class="card-text-area">
                        
                        <p class="highlighted-text fs-20">${headline}</p>

                        <div class="comment-area">
                            <p class="highlighted-text underlined">Kommentare</p>
                            <div class="comments" id="comments${index}">
                                <p class="comment">${comment0}</p>
                            </div>
                            <p id="commentsBtn${index}" onclick="loadAllComments('${index}')" class="grey-text click-text">Alle Komentare anzeigen</p>
                            <p onclick="addCommentInput('${index}')" class="highlighted-text click-text link-text">Komentar schreiben</p>
                            <div class="comment-input"></div>
                        </div>
                    </div>

                    </div>
    `
}


function getIdsFromIndex(index) {
    likeBtn = addIndex('like');
    commentsID = addIndex('comments');
    commentsBtnID = addIndex('commentsBtn');
    commentsIconID = addIndex('commentsIcon');
    InputID = addIndex('newCommentInput');                                          

    function addIndex(string) {
       return string + index
    }
}



function addCommentInput(index) {
    getIdsFromIndex(index);
    document.getElementById(commentsID).style.display = 'block';
    document.getElementById(commentsID).innerHTML = /*html*/`
        <form onsubmit="addComment('${index}'); return false">
            <label for="newCommentInput${index}">Dein Kommentar</label>
            <input id="newCommentInput${index}" type="text" required>
            <button class="link-text" type="submit">Kommentieren</button>
        </form> 
    `;
}


function changeHeart(id, source) {
    const heart = document.getElementById(id);
    heart.src = source;
}


function generateCommentsHtml(comment) {
    return /*html*/`
        <p class="comment">${comment}</p>
    `
}


function generatePostHeadline(headline, link, linkText) {
    return /*html*/`
        ${headline} <a class="link-text" target="_blank" href="${link}">${linkText}</a>
    `
}


function changeCommentsButtonToLess(btnID, commentsIconID) {
    const commentBtn = document.getElementById(btnID);
    const commentIcon = document.getElementById(commentsIconID);
    commentBtn.innerHTML = 'weniger Kommentare anzeigen';
    commentBtn.setAttribute('onclick', 'loadPosts()');
    commentIcon.setAttribute('onclick', 'loadPosts()');
    commentIcon.src = 'icons/comment_FILL1.svg';
}


function checkForComments(comment, index) {
    if (comment == undefined) {
        getIdsFromIndex(index);
        document.getElementById(commentsBtnID).style.display = 'none';
        document.getElementById(commentsID).style.display = 'none'
    }
}



function openPostOverlay() {
    document.getElementById('postOverlay').style.display = 'block';
    let imgs = document.getElementsByTagName('img');
    let cards = document.getElementsByClassName('card');
    document.getElementById('cardSection').classList.add('dark-card-section')

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.filter = 'brightness(30%)';  
    }

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = '2px solid black';  
    }
}


function closePostOverlay() {
    document.getElementById('postOverlay').style.display = 'none';
    document.getElementById('cardSection').classList.remove('dark-card-section')
}
