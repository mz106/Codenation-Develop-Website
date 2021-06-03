
console.log('test')

const imgDivHoverOne = document.getElementById("img-div-hover-one");
const imgDivHoverTwo = document.getElementById("img-div-hover-two");
const imgDivHoverThree = document.getElementById("img-div-hover-three");

const imgParaHoverOne = document.getElementById("img-para-hover-one");
const imgParaHoverTwo = document.getElementById("img-para-hover-two");
const imgParaHoverThree = document.getElementById("img-para-hover-three");

// ================ Img One ================

imgDivHoverOne.addEventListener("mouseover", function() {  
    imgParaHoverOne.classList.remove("img-article-hover-hidden");
    imgParaHoverOne.classList.add("img-article-hover-visible");
});

imgDivHoverOne.addEventListener("mouseout", function() {
    imgParaHoverOne.classList.remove("img-article-hover-visible");
    imgParaHoverOne.classList.add("img-article-hover-hidden");
});

// ================ Img Two ================

imgDivHoverTwo.addEventListener("mouseover", function() {  
    imgParaHoverTwo.classList.remove("img-article-hover-hidden");
    imgParaHoverTwo.classList.add("img-article-hover-visible");
});

imgDivHoverTwo.addEventListener("mouseout", function() {
    imgParaHoverTwo.classList.remove("img-article-hover-visible");
    imgParaHoverTwo.classList.add("img-article-hover-hidden");
});

// ================ Img Three ================

imgDivHoverThree.addEventListener("mouseover", function() {  
    imgParaHoverThree.classList.remove("img-article-hover-hidden");
    imgParaHoverThree.classList.add("img-article-hover-visible");
});

imgDivHoverThree.addEventListener("mouseout", function() {
    imgParaHoverThree.classList.remove("img-article-hover-visible");
    imgParaHoverThree.classList.add("img-article-hover-hidden");
});

