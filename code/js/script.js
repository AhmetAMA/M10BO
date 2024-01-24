/*  Hamburger Menu
---------------------------------------------------------------------------------------------------- */
function hamburgerMenu() {
    
    var x = document.getElementById("myLinks");
    
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


/*  the rest
---------------------------------------------------------------------------------------------------- */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("bmv__div2");
    let dots = document.getElementsByClassName("bmv__span");
    
    if (n > slides.length) {
        slideIndex = 1
    }    
    
    if (n < 1) {
        slideIndex = slides.length
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


// function myFunction(imgs) {
//     // Get the expanded image
//     var expandImg = document.getElementById("expandedImg");
//     // Get the image text
//     var imgText = document.getElementById("imgtext");
//     // Use the same src in the expanded image as the image being clicked on from the grid
//     expandImg.src = imgs.src;
//     // Use the value of the alt attribute of the clickable image as text inside the expanded image
//     imgText.innerHTML = imgs.alt;
//     // Show the container element (hidden with CSS)
//     // expandImg.parentElement.style.display = "block";
// }






function myFunction(element) {
    var expandImg = document.getElementById("expandedImg");
    var expandVideo = document.getElementById("expandedVideo");
    var imgText = document.getElementById("imgtext");

    if (element.tagName === "IMG") {
        expandImg.src = element.src;
        expandImg.style.display = "block";
        expandVideo.style.display = "none";
        imgText.innerHTML = element.alt;
    } else if (element.classList.contains("video-thumbnail")) {
        var videoPath = element.getAttribute("data-video");
        expandVideo.src = videoPath;
        expandVideo.style.display = "block";
        expandImg.style.display = "none";
        imgText.innerHTML = "Video";
    }
}