/* CUSTOMER TESTIMONIALS */

// function to display random reviews every time the page is refreshed
function displayReviews() {

    var reviewLinks = ["./images/tweet1.png",
    "./images/tweet2.png",
    "./images/tweet3.png",
    "./images/tweet4.png",
    "./images/tweet5.png",
    "./images/tweet6.png"]
    
    review1 = Math.floor(Math.random() * 6);  // returns a random integer from 0 to 5
    review2 = Math.floor(Math.random() * 6);
    review3 = Math.floor(Math.random() * 6);
    
    // ensure that no 2 columns show the same testimonial
    while ((review1==review2) || (review1==review3) || (review2==review3)) {
        review1 = Math.floor(Math.random() * 6);  // returns a random integer from 0 to 5
        review2 = Math.floor(Math.random() * 6);
        review3 = Math.floor(Math.random() * 6);
    }
    // change src of images
    document.getElementById("custReview1").src=reviewLinks[review1];
    document.getElementById("custReview2").src=reviewLinks[review2];
    document.getElementById("custReview3").src=reviewLinks[review3];
}