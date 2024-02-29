

function loadPosts() {
    let cardSection = document.getElementById('cardSection');

    for (let i = 0; i < posts.length; i++) {
        const logo = posts[i]['logo'];
        const author = posts[i]['author'];
        const location = posts[i]['location'];
        const img = posts[i]['img'];
        const likes = posts[i]['likes'];
        const headline = posts[i]['headline'];
        const comment0 = posts[i]['comments'][0];

        cardSection.innerHTML += generateCardHtml(logo, author, location, img, likes, headline, comment0, i);
    }
}


// generateCardHtml(logo, author, location, img, likes, headline, comment0, index)