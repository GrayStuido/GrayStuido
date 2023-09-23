<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review Carousel with Fade Transition</title>
    <style>
        #review-container {
            width: 300px;
            padding: 10px;
            border: 1px solid #ccc;
            margin: 0 auto;
            text-align: center;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }

        #review-container.show {
            opacity: 1;
        }
    </style>
</head>
<body>
    <div id="review-container">
        <div id="review-content"></div>
        <p id="reviewer"></p>
    </div>

    <script>
        // Define an array of reviews
        const reviews = [
            {
                content: "Lorem Ipsum 1",
                reviewer: "Random User 1"
            },
            {
                content: "Lorem Ipsum 2",
                reviewer: "Random User 2"
            },
            {
                content: "Lorem Ipsum 3",
                reviewer: "Random User 3"
            }
        ];

        // Function to update the review content with a fade effect
        function updateReview(index) {
            const reviewContainer = document.getElementById("review-container");
            const reviewContent = document.getElementById("review-content");
            const reviewer = document.getElementById("reviewer");

            // Add a class to trigger the fade transition
            reviewContainer.classList.remove("show");

            setTimeout(() => {
                // Update the content and reviewer based on the index
                reviewContent.textContent = reviews[index].content;
                reviewer.textContent = `- ${reviews[index].reviewer} -`;

                // Add the class to fade the content in
                reviewContainer.classList.add("show");
            }, 500); // Wait for the fade out transition to complete
        }

        let currentIndex = 0;

        // Initial review
        updateReview(currentIndex);

        // Function to cycle through reviews
        function nextReview() {
            currentIndex = (currentIndex + 1) % reviews.length;
            updateReview(currentIndex);
        }

        // Set an interval to automatically cycle through reviews
        setInterval(nextReview, 3000); // Change every 3 seconds
    </script>
</body>
</html>
