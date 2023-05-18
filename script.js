let hide = document.querySelector('span');
let seeMore = document.getElementById('see-more');
let seeLess = document.getElementById('see-less');

function showText(){
hide.style.display = 'block';
seeMore.style.display = 'none';
seeMore.style.textAlign = 'center'
seeLess.style.display = 'block';
seeLess.style.textAlign = 'center'

}
function hideText(){
hide.style.display = 'none';
seeLess.style.display = 'none';
seeMore.style.display = 'block';
}
