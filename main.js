
/* HOME */

// function that fades the home page (opacity) as the page is scrolled down

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    $('.home-background').css({
        opacity: function() {
            var elementHeight = $(this).height();
            opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    });
});

// main
/* ------------CUSTOMER TESTIMONIALS------------------- */
// declare global variables
var origReviewLinks = ["./images/tweet1.png",
    "./images/tweet2.png",
    "./images/tweet3.png",
    "./images/tweet4.png",
    "./images/tweet5.png",
    "./images/tweet6.png",
    "./images/tweet7.png",
    "./images/tweet8.png",
    "./images/tweet9.png"];
var reviewLinks = origReviewLinks;
var shift = 0;
window.setInterval(shiftReviews, 10000);

// function to shift reviews 
function shiftReviews() {
    link1 = reviewLinks[0];
    link2 = reviewLinks[1];
    link3 = reviewLinks[2];
    for (i = 0; i < reviewLinks.length - 3; i++) {
        reviewLinks[i] = reviewLinks[i+3];
    }
    shift += 1;
    if (shift > 3) {
        shift -= 3;
    }
    console.log("shift = " + shift);
    reviewLinks[reviewLinks.length-1] = link1;
    reviewLinks[reviewLinks.length-2] = link2;
    reviewLinks[reviewLinks.length-3] = link3;
    displayReviews();
}

// function to display reviews
function displayReviews() {
    
    document.getElementById("custReview1").src=reviewLinks[0];
    document.getElementById("custReview2").src=reviewLinks[1];
    document.getElementById("custReview3").src=reviewLinks[2];

    if (shift == 1) {
        document.getElementById("dot1").style.color = "rgba(255,255,255,0.6)";
        document.getElementById("dot2").style.color = "rgba(255,255,255,0.3)";
        document.getElementById("dot3").style.color = "rgba(255,255,255,0.3)";
    }
    else if (shift == 2) {
        document.getElementById("dot1").style.color = "rgba(255,255,255,0.3)";
        document.getElementById("dot2").style.color = "rgba(255,255,255,0.6)";
        document.getElementById("dot3").style.color = "rgba(255,255,255,0.3)";
    }
    else if (shift == 3) {
        document.getElementById("dot1").style.color = "rgba(255,255,255,0.3)";
        document.getElementById("dot2").style.color = "rgba(255,255,255,0.3)";
        document.getElementById("dot3").style.color = "rgba(255,255,255,0.6)";
    }
}

function reviewsP1() {
    /*
    - indexing problems
    */
    var shiftScale = 0;
    var link1, link2, link3, link4, link5, link6;
    if (shift == 2) {
        shiftScale = 1  
        
        link1 = reviewLinks[6];
        link2 = reviewLinks[7];
        link3 = reviewLinks[8];
    }
    else if (shift == 3) {
        shiftScale = 1    
        
        link1 = reviewLinks[3];
        link2 = reviewLinks[4];
        link3 = reviewLinks[5];
        link4 = reviewLinks[6];
        link5 = reviewLinks[7];
        link6 = reviewLinks[8];
    }

    document.getElementById("dot1").style.color = "rgba(255,255,255,0.6)";
    document.getElementById("dot2").style.color = "rgba(255,255,255,0.3)";
    document.getElementById("dot3").style.color = "rgba(255,255,255,0.3)";
    
    for (i = 3*shiftScale; i < reviewLinks.length; i++) {
        reviewLinks[i] = reviewLinks[i-3*shiftScale];
    }
    if (shift == 1) {
        reviewLinks[0] = link3;
        reviewLinks[1] = link2;
        reviewLinks[2] = link1;
    }
    
    if (shift == 3) {
        
        reviewLinks[3] = link4;
        reviewLinks[4] = link5;
        reviewLinks[5] = link6;
    }

    shift -= 3*shiftScale;
    if (shift < 1) {
        shift += 3*shiftScale;
    }

    displayReviews();
}

function reviewsP2() {

}

function reviewsP3() {

}

/* ---- Customer Testimonials end ---- */

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
