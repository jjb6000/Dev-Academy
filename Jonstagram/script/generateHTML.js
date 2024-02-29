
function generateCardHtml(logo, author, location, img, likes, headline, comment0, index) {
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
                        <img src="icons/like_FILL0.svg" alt="Gefällt mir">
                        <img src="icons/comment.svg" alt="Kommentare ansehen">
                        <img src="icons/add_comment.svg" alt="Kommentar hinzufügen">
                    </div>

                    <div class="card-text-area">
                        <div class="likes">
                            <img src="icons/like_FILL1.svg" alt="likes"><span>${likes}</span>
                        </div>
                        
                        <p class="highlighted-text fs-20">${headline}</p>

                        <div class="comment-area">
                            <div class="comments" id="comments${index}">
                                <p>${comment0}</p>
                            </div>
                            <p class="highlighted-text">Mehr Komentare anzeigen</p>
                            <p class="highlighted-text">Komentar schreiben</p>
                            <div class="comment-input"></div>
                        </div>
                    </div>

                    </div>
    `
}