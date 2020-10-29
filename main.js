
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

/* CUSTOMER TESTIMONIALS */
// window.onload = setTimeout(shiftReviews, 12000);

// function to display random reviews every time the page is refreshed
function displayReviews() {

    /*
    TO DO
    - figure out how to shuffle order of images
    */

    var reviewLinks = ["./images/tweet1.png",
    "./images/tweet2.png",
    "./images/tweet3.png",
    "./images/tweet4.png",
    "./images/tweet5.png",
    "./images/tweet6.png",
    "./images/tweet7.png"];

    var reviewOrder = ["","","","","","",""];
    
    review1 = Math.floor(Math.random() * reviewLinks.length);  // returns a random integer from 0 to array length - 1
    review2 = Math.floor(Math.random() * reviewLinks.length);
    review3 = Math.floor(Math.random() * reviewLinks.length);

    // // ensure that no 2 columns show the same testimonial
    while ((review1==review2) || (review1==review3) || (review2==review3)) {
        review1 = Math.floor(Math.random() * 6);
        review2 = Math.floor(Math.random() * 6);
        review3 = Math.floor(Math.random() * 6);
    }

    // generate random review to display testimonials in
    // for (i=0; i < displayReviews.length; i++) {
    //     reviewOrder[i] = Math.floor(Math.random() * reviewLinks.length);
    // }
    
    // change src of images
    document.getElementById("custReview1").src=reviewLinks[review1];
    document.getElementById("custReview2").src=reviewLinks[review2];
    document.getElementById("custReview3").src=reviewLinks[review3];
    // document.getElementById("custReview1").src=reviewOrder[0];
    // document.getElementById("custReview2").src=reviewOrder[1];
    // document.getElementById("custReview2").src=reviewOrder[2];
}

// function to shift reviews 
function shiftReviews() {
    // 
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
