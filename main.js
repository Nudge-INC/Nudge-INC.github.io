/* CUSTOMER TESTIMONIALS */
function displayReviews() {
    // window.location.hash = "reload";
    // window.location.reload();
    alert("displayReviews() function")
    
    var reviewLinks = ["./images/tweet1.png",
    "./images/tweet2.png",
    "./images/tweet3.png",
    "./images/tweet4.png",
    "./images/tweet5.png",
    "./images/tweet6.png"]
    
    review1 = Math.round(Math.random(0,5));  // returns a random integer from 0 to 9
    review2 = Math.round(Math.random(0,5));
    review3 = Math.round(Math.random(0,5));
    
    // ensure that no 2 columns show the same testimonial
    while ((review1==review2) || (review1==review3) || (review2==review3)) {
        review1 = Math.round(Math.random(0,5));  // returns a random integer from 0 to 9
        review2 = Math.round(Math.random(0,5));
        review3 = Math.round(Math.random(0,5));
    }

    document.getElementById("custReview1").src=reviewLinks[review1];
    document.getElementById("custReview2").src=reviewLinks[review2];
    document.getElementById("custReview3").src=reviewLinks[review3];
    document.getElementById("testing").innerHTML=review1 + ", " + review2 + ", " + revew3;
}