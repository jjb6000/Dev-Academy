
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
                        <img id="like${index}" onclick="likeFunction('like${index}', '${index}')" src="${likeSrc}" alt="Gefällt mir">
                        <img src="icons/comment.svg" alt="Kommentare ansehen">
                        <img src="icons/add_comment.svg" alt="Kommentar hinzufügen">
                    </div>

                    <div class="card-text-area">
                        
                        <p class="highlighted-text fs-20">${headline}</p>

                        <div class="comment-area">
                            <div class="comments" id="comments${index}">
                                <p>${comment0}</p>
                            </div>
                            <p class="grey-text click-text">Alle Komentare anzeigen</p>
                            <p class="highlighted-text click-text">Komentar schreiben</p>
                            <div class="comment-input"></div>
                        </div>
                    </div>

                    </div>
    `
}

