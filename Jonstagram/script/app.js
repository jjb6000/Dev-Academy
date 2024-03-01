

function loadPosts() {
    let cardSection = document.getElementById('cardSection');
    cardSection.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const logo = posts[i]['logo'];
        const author = posts[i]['author'];
        const location = posts[i]['location'];
        const img = posts[i]['img'];
        const like = posts[i]['like'];
        const headline = posts[i]['headline'];
        const comment0 = posts[i]['comments'][0];

        cardSection.innerHTML += generateCardHtml(logo, author, location, img, like, headline, comment0, i);
    }
}


function likeFunction(id, index) {
    let likeBoolean = posts[index]['like'];
    
    if (likeBoolean === false) {
        posts[index]['like'] = true;
        savePostsToLS();
        loadPosts();
    } else {
        posts[index]['like'] = false;
        savePostsToLS();
        loadPosts();
    }
}


function loadAllComments(id, index, btnID, commentsIconID) {
    const commentContainer = document.getElementById(id);
    const commentsArray = posts[index]['comments'];
    commentContainer.innerHTML = '';

    for (let i = 0; i < commentsArray.length; i++) {
        commentContainer.innerHTML += generateCommentsHtml(commentsArray[i]);  
    }
    changeCommentsButtonToLess(btnID, commentsIconID);
}


