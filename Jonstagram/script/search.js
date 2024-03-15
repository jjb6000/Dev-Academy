
let searchInput = document.getElementById('searchInput');
let searchValue
const searchList = document.getElementById('searchList');

searchInput.addEventListener("input", e => {
    let searchValue = e.target.value;
    searchList.innerHTML = ''
    window.scrollTo(0,0);
    const serarchArray = generateSearchArray();
    for (let i = 0; i < serarchArray.length; i++) {
        if (serarchArray[i].indexOf(searchValue.toLowerCase()) > -1) {
            getIdsFromIndex(i);
            searchList.innerHTML += generateSearchListitem(cardID, posts[i]['headline']);
        } 
    }
    if (searchValue == '') {
        searchList.innerHTML = ''
    }
})


function generateSearchArray() {
    let serarchArray = [];
    for (let i = 0; i < posts.length; i++) {
        serarchArray.push(posts[i]['headline'].toLowerCase());
    }
    return serarchArray;
}



function emptySearchBar() {
    searchList.innerHTML = '';
    document.getElementById('searchInput').value = '';
}
