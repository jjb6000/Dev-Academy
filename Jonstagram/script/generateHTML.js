
// ANCHOR generate card html
function generateCardHtml(logo, author, location, img, likes, headline, comment0, index) {
    
    return /*html*/`
                <div id="card${index}" class="card standard-border-style">

                    <div class="card-header">
                        <img class="profile-pic" src="${logo}" alt="Profilbild">
                        <div class="card-author-data">
                            <p class="highlighted-text fs-20 margin-0">${author}<span class="post-time"> • ${dateFunction(index)}</span></p>  
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


function generateHeartHtml(index) {
    return /*html*/`
        Gefällt ${posts[index]['likes']} Mal
    `;
}



// ANCHOR comment related generator functions
function generateCommentsHtml(comment) {
    return /*html*/`
        <p class="comment">${comment}</p>
    `
}


function generateCommentInputHtml(index) {
    return /*html*/`
        <form class="comment-form" onsubmit="addComment('${index}'); return false">
            <label for="newCommentInput${index}">Dein Kommentar</label>
            <textarea class="standard-border-style" id="newCommentInput${index}" type="text" maxlength="80" required></textarea>
            <button class="no-btn-style highlighted-text click-text link-text" type="submit">Kommentieren</button>
        </form> 
        `;   
}


//ANCHOR searchbar html
function generateSearchListitem(cardID, headline) {
    return /*html*/`
       <li><a onclick="emptySearchBar()" href="#${cardID}">'${headline}'</a></li> 
    `
}


