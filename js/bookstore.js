function navAnimation(x) {
    x.classList.toggle("change");
}

// let slideIndex = 0;
// showSlides();
//
// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     for (i = 0;  < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 2000);
// }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Tablink Functions

function openPage(pageName, elmnt, background) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        // tablinks[i].style.backgroundImage = "";
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    // elmnt.style.backgroundImage = `url('${background}')`;
    elmnt.style.backgroundColor = background;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Books

let newReleases = {
    name: "Bitterblue",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646961642i/60588986.jpg",
    isbn: "0803734735",
};
//
let image = document.getElementById('book-pic');
console.log(document.getElementById('book-pic'));
//
// function getBooks(id) {
//     let section = document.getElementById(id);
//     for (let i = 0; i < id.length; i++) {
//         section.img.URL = id[i].img;
//     }
// }

let tab = document.getElementById('NewReleases');

tab.addEventListener('click', function getBooks() {
    let isbn = newReleases[0].isbn;
    console.log(newReleases[0].isbn);
    let result = `covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
    return image.src = result.url;
})



// var loadFile = function(event) {
//     var image = document.getElementById('output');
//     image.src = URL.createObjectURL(event.target.files[0]);
// };