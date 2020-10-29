/* CUSTOMER TESTIMONIALS */
// console.log("hello world");
// var anim_played;

// window.onscroll = function() {scrollPosition()};
// function scrollPosition() {
//     var elmnt = document.getElementById("upper-cont");
//     var c = elmnt.clientHeight; // viewable height of upper-container in px
//     var ite_count = Number(elmnt.style.animationIterationCount);

//     if ((c >= 40) && (anim_played != true)) {
//         ite_count += 1;
//         console.log("anim_played = " + anim_played + "\nite_count = " + ite_count);    
//         document.getElementById("upper-cont").style.animationIterationCount = ite_count;
//         // document.getElementById("upper-cont").style.animationPlayState = "running";
//         anim_played = true;
//         console.log("anim_played = " + anim_played);
//         // document.getElementById("upper-cont").style.animationIterationCount = 1;
//     }
//     else {
//         document.getElementById("upper-cont").style.animationPlayState = "paused";
//         anim_played = false;
//         console.log("upper_container is not visible, anim_played = " + anim_played);
//     }
// }

// window.addEventListener(
//     "scroll",
//     () => {
//         // document.body.style.setProperty("--scroll", window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
//         console.log("scroll = " + --scroll);
//     },
//     false
// );

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