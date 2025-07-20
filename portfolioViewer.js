var imageIndex;
var imageList =[''];


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