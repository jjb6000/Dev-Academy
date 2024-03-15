// ANCHOR load posts
function loadPosts() {
    cardSection.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {

        if (posts[i]['like'] === true) {
            likeSrc = 'icons/like_FILL1.svg'
        } else {
            likeSrc = 'icons/like_FILL0.svg'
        }
        cardSection.innerHTML += generateCardHtml(posts[i]['logo'], posts[i]['author'], posts[i]['location'], posts[i]['img'], posts[i]['likes'], posts[i]['headline'], posts[i]['comments'][0], i);
        checkForComments(posts[i]['comments'][0], i);
    }
}


// ANCHOR create posts
function openPostOverlay() {
    document.getElementById('postOverlay').style.visibility = 'visible';
    document.getElementById('popUp').classList.add("open-popUp"); 
}


function closePostOverlay() {
    document.getElementById('popUp').classList.remove("open-popUp");
    document.getElementById('postOverlay').style.visibility = 'hidden';
}


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
    const today = new Date(Date.now());
    return {
        author: author,
        date: today,
        logo: 'img/account.png',
        location: location,
        img: img,
        like: false,
        likes: '0',
        headline: generatePostHeadline(headline, link, linkText),
        comments: []
    }
}



// ANCHOR like
function likeFunction(index) {
    let likeBoolean = posts[index]['like'];
    
    if (likeBoolean == false) {
        updateLikesInPostObject(index, true, 1);
        savePostsToLS();
        changeHeartAndLikes(index, 'icons/like_FILL1.svg');
    } else {
        updateLikesInPostObject(index, false, -1);
        savePostsToLS();
        changeHeartAndLikes(index, 'icons/like_FILL0.svg');
    } 
}


function updateLikesInPostObject(index, boolean, increment) {
    let likes = posts[index]['likes'];
    posts[index]['like'] = boolean;
    posts[index]['likes'] = +likes + increment;
}


function changeHeartAndLikes(index, source) {
    getIdsFromIndex(index);
    const heart = document.getElementById(likeBtn);
    heart.src = source;
    document.getElementById(likesID).innerHTML = generateHeartHtml(index);
}



// ANCHOR comments
function checkForComments(comment, index) {
    if (comment == undefined) {
        getIdsFromIndex(index);
        document.getElementById(commentsBtnID).style.display = 'none';
        document.getElementById(commentsID).style.display = 'none'
    }
}


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

function changeCommentsButtonToLess(btnID, commentsIconID) {
    const commentBtn = document.getElementById(btnID);
    const commentIcon = document.getElementById(commentsIconID);
    commentBtn.innerHTML = 'weniger Kommentare anzeigen';
    commentBtn.setAttribute('onclick', 'loadPosts()');
    commentIcon.setAttribute('onclick', 'loadPosts()');
    commentIcon.src = 'icons/comment_FILL1.svg';
}



function addCommentInput(index) {
    getIdsFromIndex(index);
    document.getElementById(commentsID).style.display = 'block';
    document.getElementById(commentsID).innerHTML = generateCommentInputHtml(index); 
}







