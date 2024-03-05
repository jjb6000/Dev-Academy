// ANCHOR load posts
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
        checkForComments(comment0, i);
    }
}


// ANCHOR create posts
function newPost() {
    const author = document.getElementById('authorInput');
    const location = document.getElementById('locationInput');
    const img = document.getElementById('imgInput');
    const headline = document.getElementById('headlineInput');
    const link = document.getElementById('linkInput');
    const linkText = document.getElementById('linkTextInput');

    let newPostObject = createNewObject(author.value, location.value, img.value, headline.value, link.value, linkText.value);
    console.log(newPostObject);
    posts.push(newPostObject);
    savePostsToLS();
    loadPosts();
    closePostOverlay();
}


function createNewObject(author, location, img, headline, link, linkText) {  
   
    return {
        author: author,
        logo: 'img/jonas.png',
        location: location,
        img: img,
        like: 'false',
        headline: generatePostHeadline(headline, link, linkText),
        comments: []
    }
}



// ANCHOR like
function likeFunction(index) {
    getIdsFromIndex(index);
    let likeBoolean = posts[index]['like'];
    
    if (likeBoolean === false) {
        posts[index]['like'] = true;
        savePostsToLS();
        changeHeart(likeBtn,'icons/like_FILL1.svg');
    } else {
        posts[index]['like'] = false;
        savePostsToLS();
        changeHeart(likeBtn,'icons/like_FILL0.svg');
    }
    
}



// ANCHOR comments
function loadAllComments(index) {
    getIdsFromIndex(index);
    const commentContainer = document.getElementById(commentsID);
    const commentsArray = posts[index]['comments'];
    commentContainer.innerHTML = '';

    for (let i = 0; i < commentsArray.length; i++) {
        commentContainer.innerHTML += generateCommentsHtml(commentsArray[i]);  
    }
    changeCommentsButtonToLess(commentsBtnID, commentsIconID);
}


function addComment(index) {
    const newComment = document.getElementById(InputID);
    posts[index]['comments'].push(newComment.value);
    savePostsToLS();
    loadPosts();
    loadAllComments(index)    
}







