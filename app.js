
const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;


document.getElementById('btnNext').addEventListener('click', function() {
    hideAll();
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
        console.log(slidePosition);
    } else {
        slidePosition++;
        console.log(slidePosition);
    }
    slides[slidePosition].classList.add('carousel-item-visible');

})

document.getElementById("btnPrev").addEventListener("click", function() {
    hideAll();
    console.log(slidePosition)
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
        console.log("slide position is 0")
    } else {
        slidePosition = slidePosition - 1;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
})

function hideAll() {
    for(let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

// addEventListener("mouseover", function() {
//     document.getElementById("img-para-hover").classList.remove("img-article-hover-none");
//     document.getElementById("img-para-hover").classList.add("img-article-hover-visible")
// });


const imgDivHover = document.getElementById("img-div-hover");

console.log(imgDivHover)
console.log('cheese')



