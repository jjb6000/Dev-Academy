
let searchInput = document.getElementById('searchInput');

searchInput.addEventListener("input", e => {
    const value = e.target.value;
    console.log(value);
})