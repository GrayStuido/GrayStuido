const reviews = [
    { content: "He a pretty funny little fella. Don't know him that well, but pretty W so far. 7/10", reviewer: "SabatonGuy1" },
    { content: "cute :3", reviewer: "Hoootis" },
    { content: "8/10 Spoiled me too much", reviewer: "mentallyabsent" },
    { content: "35.227.62.178", reviewer: "da cheese man" },
    { content: "this mf is 100% in the fruit basket", reviewer: "crimson.official" },
];

let currentIndex = 0;

// Initial display of dummy review
displayDummyReview();

// Function to display the dummy review
function displayDummyReview() {
    const reviewText = document.getElementById("review-text");
    const reviewAuthor = document.getElementById("review-author");

    reviewText.textContent = `"Hai! Im loading :P"`;
    reviewAuthor.textContent = `- Gragin -`;

    // Fade in effect for the dummy review
    const reviewContainer = document.getElementById("review-container");
    reviewContainer.style.opacity = 1;

    // Set timeout for transitioning to actual reviews
    setTimeout(() => {
        // Fade out dummy review
        reviewContainer.style.opacity = 0;

        // After fade out, transition to first real review
        setTimeout(() => {
            displayReview();
            // Fade in the first real review
            reviewContainer.style.opacity = 1;
        }, 300); // Delay before fading in real review (0.3 seconds)
    }, 2000); // Adjust delay as needed for dummy review display
}

// Function to display a review
function displayReview() {
    const reviewText = document.getElementById("review-text");
    const reviewAuthor = document.getElementById("review-author");

    reviewText.textContent = `"${reviews[currentIndex].content}"`;
    reviewAuthor.textContent = `- ${reviews[currentIndex].reviewer} -`;

    // Increment index for the next review
    currentIndex = (currentIndex + 1) % reviews.length;

    // Schedule next review transition after 5 seconds (adjust as needed)
    setTimeout(() => {
        // Fade out current review
        const reviewContainer = document.getElementById("review-container");
        reviewContainer.style.opacity = 0;

        // After fade out, display next review and fade in
        setTimeout(() => {
            displayReview();
            reviewContainer.style.opacity = 1;
        }, 500); // Fade out duration (adjust as needed)
    }, 5000); // Review display duration (adjust as needed)
}
