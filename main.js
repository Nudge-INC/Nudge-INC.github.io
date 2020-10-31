
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
/* CUSTOMER TESTIMONIALS */
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
    temp = "";
    firstImage = reviewLinks[0];
    for (i = 0; i < reviewLinks.length - 1; i++) {
        reviewLinks[i] = reviewLinks[i+1];
    }
    shift += 1;
    if (shift > 8) {
        shift -= 9;
    }
    console.log("shift = " + shift);
    reviewLinks[reviewLinks.length-1] = firstImage;
    displayReviews();
}

function displayReviews() {
    
    document.getElementById("custReview1").src=reviewLinks[0];
    document.getElementById("custReview2").src=reviewLinks[1];
    document.getElementById("custReview3").src=reviewLinks[2];

    if ((shift==0) || (shift==1) || (shift==2)) {
        document.getElementById("dot1").style.color = "rgba(255,255,255,0.6)";
        document.getElementById("dot2").style.color = "rgba(255,255,255,0.3)";
        document.getElementById("dot3").style.color = "rgba(255,255,255,0.3)";
    }
    else if ((shift==3) || (shift==4) || (shift==5)) {
        document.getElementById("dot1").style.color = "rgba(255,255,255,0.3)";
        document.getElementById("dot2").style.color = "rgba(255,255,255,0.6)";
        document.getElementById("dot3").style.color = "rgba(255,255,255,0.3)";
    }
    else if ((shift==6) || (shift==7) || (shift==8)) {
        document.getElementById("dot1").style.color = "rgba(255,255,255,0.3)";
        document.getElementById("dot2").style.color = "rgba(255,255,255,0.3)";
        document.getElementById("dot3").style.color = "rgba(255,255,255,0.6)";
    }
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
