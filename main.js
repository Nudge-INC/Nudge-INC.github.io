
/* HOME */

// function that fades the home page (opacity) as the page is scrolled down

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    $('.home-background').css({
        opacity: function() {
            var elementHeight = $(this).height();
            opacity = ((elementHeight - scrollTop - 100) / elementHeight);
            return opacity;
        }
    });
});

// main
/* ------------CUSTOMER TESTIMONIALS------------------- */
// declare global variables
var reviewLinks = ["./images/tweet1.png",
    "./images/tweet2.png",
    "./images/tweet3.png",
    "./images/tweet4.png",
    "./images/tweet5.png",
    "./images/tweet6.png"];
var shift = 0;
window.setInterval(shiftReviews, 7500);

// function to shift reviews 
function shiftReviews() {
    temp = "";
    firstImage = reviewLinks[0];
    for (i = 0; i < reviewLinks.length - 1; i++) {
        reviewLinks[i] = reviewLinks[i+1];
    }
    shift += 1;
    if (shift > 5) {
        shift -= 6;
    }
    console.log("shift = " + shift);
    reviewLinks[reviewLinks.length-1] = firstImage;
    displayReviews();
}

// function to display reviews
function displayReviews() {

    // set photos
    for (i = 1; i < 4; i++) {
        document.getElementById("custReview" + i).src=reviewLinks[i-1];
    }

    // set dots
    for (i = 1; i < reviewLinks.length+1; i++) {
        document.getElementById("dot" + i).style.color = "rgba(255,255,255,0.3)";
    }

    document.getElementById("dot" + (shift + 1)).style.color = "rgba(255,255,255,0.6)";
}

function dot1() {
    console.log("dot1 clicked");
    reviewLinks = ["./images/tweet1.png",
    "./images/tweet2.png",
    "./images/tweet3.png",
    "./images/tweet4.png",
    "./images/tweet5.png",
    "./images/tweet6.png"];
    shift = 0;
    displayReviews();
}
function dot2() {
    console.log("dot2 clicked");
    reviewLinks = ["./images/tweet2.png",
    "./images/tweet3.png",
    "./images/tweet4.png",
    "./images/tweet5.png",
    "./images/tweet6.png",
    "./images/tweet1.png"];
    shift = 1;
    displayReviews();
}
function dot3() {
    console.log("dot3 clicked");
    reviewLinks = ["./images/tweet3.png",
    "./images/tweet4.png",
    "./images/tweet5.png",
    "./images/tweet6.png",
    "./images/tweet1.png",
    "./images/tweet2.png"];
    shift = 2;
    displayReviews();
}
function dot4() {
    console.log("dot4 clicked");
    reviewLinks = ["./images/tweet4.png",
    "./images/tweet5.png",
    "./images/tweet6.png",
    "./images/tweet1.png",
    "./images/tweet2.png",
    "./images/tweet3.png"];
    shift = 3;
    displayReviews();
}
function dot5() {
    console.log("dot5 clicked");
    reviewLinks = ["./images/tweet5.png",
    "./images/tweet6.png",
    "./images/tweet1.png",
    "./images/tweet2.png",
    "./images/tweet3.png",
    "./images/tweet4.png"];
    shift = 4;
    displayReviews();
}
function dot6() {
    console.log("dot6 clicked");
    reviewLinks = ["./images/tweet6.png",
    "./images/tweet1.png",
    "./images/tweet2.png",
    "./images/tweet3.png",
    "./images/tweet4.png",
    "./images/tweet5.png"];
    shift = 5;
    displayReviews();
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}
function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}
function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}

// Contact Us
function ThankYou(){
    var contactbutton = document.getElementById("SupportPopup");
    contactbutton.classList.toggle("show");
}