let fotoArray = ['IMG_20231219_201005_825.jpg', 'IMG_20231219_201012_703.jpg', 'IMG_20231219_201020_554.jpg', 'PXL_20230919_143021042.jpg', 'PXL_20231008_111916101.jpg', 'PXL_20231125_131140711.jpg', 'PXL_20231125_142632456.jpg', 'PXL_20231125_143422650.jpg', 'PXL_20231125_143444599.jpg', 'PXL_20231125_150652509.jpg', 'PXL_20231125_150759613.jpg', 'PXL_20231125_153848553.jpg', 'PXL_20231126_110007881.jpg', 'PXL_20231126_111707841.PORTRAIT.ORIGINAL.jpg', 'PXL_20231126_111710675.PORTRAIT.ORIGINAL.jpg', 'PXL_20231126_122515369.jpg', 'PXL_20231126_124322802.jpg', 'PXL_20231126_151632989.jpg', 'PXL_20231217_102045899.jpg', 'PXL_20231217_104733363.jpg', 'PXL_20231217_105600386.jpg', 'PXL_20231217_105626036.jpg', 'PXL_20231217_105627346.jpg'];
let fotoID
const fotoContainer = document.getElementById('fotoContainer');
const overlay = document.getElementById('imgSelect');
const imgContainer = document.getElementById('imgContainer');

function loadPics() {
    for (let i = 0; i < fotoArray.length; i++) {

        fotoContainer.innerHTML += /*html*/`
            <img src="img/${fotoArray[i]}" id="${fotoArray[i]}" onclick="showFoto('${fotoArray[i]}')">
        `;
    }
}



function showFoto(id) {
    overlay.style.display = 'block';
    imgContainer.innerHTML =/*html*/`
       <img src="img/${id}" alt=""> 
    `;
    fotoID = id;
}


function closeFoto() {
    imgContainer.innerHTML = '';
    overlay.style.display = 'none';
}


function nextImg() {
    index = fotoArray.indexOf(fotoID) + 1;
    showFoto(checkEndOrStart(index));
}


function previousImg() {
    let index = fotoArray.indexOf(fotoID) - 1;
    let newId = checkEndOrStart(index);
    showFoto(newId);
}



function checkEndOrStart(index) {
    let endIndex = fotoArray.length -1

    if (index < 0) {
        fotoID = fotoArray[endIndex];
        return fotoID;
    } else if (index > endIndex) {
        fotoID = fotoArray[0];
        return fotoID;
    } else {
        fotoID = fotoArray[index];
        return fotoID;
    }
}


