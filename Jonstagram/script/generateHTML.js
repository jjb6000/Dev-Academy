
// ANCHOR generate card html
function generateCardHtml(logo, author, location, img, like, likes, headline, comment0, index) {
    const timeSincePost = dateFunction(index);
    let likeSrc

    if (like === true) {
        likeSrc = 'icons/like_FILL1.svg'
    } else {
        likeSrc = 'icons/like_FILL0.svg'
    }

    return /*html*/`
                <div id="card${index}" class="card standard-border-style">

                    <div class="card-header">
                        <img class="profile-pic" src="${logo}" alt="Profilbild">
                        <div class="card-author-data">
                            <p class="highlighted-text fs-20 margin-0">${author}<span class="post-time"> • ${timeSincePost}</span></p>  
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
                        <p id="likes${index}" class="highlighted-text">Gefällt ${likes} Mal</p>
                        
                        <p class="highlighted-text fs-20">${headline}</p>

                        <div class="comment-area">
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


function generatePostHeadline(headline, link, linkText) {
    return /*html*/`
        ${headline} <a class="link-text" target="_blank" href="${link}">${linkText}</a>
    `
}


function changeHeartAndLikes(index, source) {
    getIdsFromIndex(index);
    const heart = document.getElementById(likeBtn);
    heart.src = source;
    document.getElementById(likesID).innerHTML = /*html*/`
        Gefällt ${posts[index]['likes']} Mal
    `;
}



// ANCHOR ID generator
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



// ANCHOR comment related functions
function generateCommentsHtml(comment) {
    return /*html*/`
        <p class="comment">${comment}</p>
    `
}


function addCommentInput(index) {
    getIdsFromIndex(index);
    document.getElementById(commentsID).style.display = 'block';
    document.getElementById(commentsID).innerHTML = /*html*/`
        <form class="comment-form" onsubmit="addComment('${index}'); return false">
            <label for="newCommentInput${index}">Dein Kommentar</label>
            <textarea class="standard-border-style" id="newCommentInput${index}" type="text" maxlength="80" required></textarea>
            <button class="no-btn-style highlighted-text click-text link-text" type="submit">Kommentieren</button>
        </form> 
    `;
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


// ANCHOR add post html
function openPostOverlay() {
    document.getElementById('postOverlay').style.visibility = 'visible';
    document.getElementById('popUp').classList.add("open-popUp"); 
}


function closePostOverlay() {
    document.getElementById('popUp').classList.remove("open-popUp");
    document.getElementById('postOverlay').style.visibility = 'hidden';
}


//ANCHOR searchbar html
function generateSearchListitem(cardID, headline) {
    return /*html*/`
       <li><a onclick="emptySearchBar()" href="#${cardID}">'${headline}'</a></li> 
    `
}


function emptySearchBar() {
    searchList.innerHTML = '';
    document.getElementById('searchInput').value = '';
}