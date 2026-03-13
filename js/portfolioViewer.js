var imageIndex;
var imageList =[''];

const highlightImg = document.getElementById('highlight-image');
const overlay       = document.getElementById('lightbox-overlay');
const lightboxImg   = document.getElementById('lightbox-img');
const closeBtn      = document.getElementById('lightbox-close');

let scale = 1;
const MIN_SCALE = 1;
const MAX_SCALE = 4;

closeBtn.addEventListener('click', closeLightBox);

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightBox();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightBox();
});

highlightImg.addEventListener('click', () => {
    lightboxImg.src = highlightImg.src;
    scale = 1;
    lightboxImg.style.transform = `scale(1)`;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeLightBox(){
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    scale = 1;
}

lightboxImg.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale + delta));
    lightboxImg.style.transform = `scale(${scale})`
}, {passive: false});

function changeDisplayImage(img){
    console.log(imageList);
    imageIndex = imageList.indexOf(img); 
    var display = document.getElementById("highlight-image");
    display.src = img.src;

}
function cyclePortfolioIndex(inc){
    var newIndex = imageIndex + inc;

    imageIndex = newIndex % imageIndex.length;

    changeDisplayImage(imageList[imageIndex]);
}
window.onload = function() {
    
    imageList = document.querySelectorAll('.photo-standby img');
    imageList = Array.prototype.slice.call(imageList);
    changeDisplayImage(imageList[0]);
    imageIndex = 0;
}