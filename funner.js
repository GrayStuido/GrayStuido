let imageLoaded = false; // flag to keep track of image loaded status
let imageSrc = "https://cdn.discordapp.com/attachments/800613712582148108/1141874559058985130/image.png"; // default image source URL

// Define a function to show the image
function showImage() {
  // If an image is already loaded, return without doing anything
  if (imageLoaded) {
    return;
  }

  // Set the flag to true to indicate that an image has been loaded
  imageLoaded = true;

  // Create a new <div> element to hold the image
  const imageDiv = document.createElement("div");

  // Set the <div> element's position, size, and background color
  imageDiv.style.position = "fixed";
  imageDiv.style.top = "0";
  imageDiv.style.left = "0";
  imageDiv.style.width = "100vw";
  imageDiv.style.height = "100vh";
  imageDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

  // Create a new <img> element for the image
  const image = document.createElement("img");

  // Set the <img> element's source and size
  image.src = imageSrc;
  image.style.width = "100%";
  image.style.height = "100%";
  image.style.maxHeight = "101%";
  image.style.position = "absolute";
  image.style.top = "50%";
  image.style.left = "50%";
  image.style.transform = "translate(-50%, -50%)";

  // Add the <img> element to the <div> element
  imageDiv.appendChild(image);

  // Add a click event listener to the <div> element to hide it when clicked
  imageDiv.addEventListener("click", () => {
    // Set the flag to false to indicate that the image has been removed
    imageDiv.remove();
    imageLoaded = false;
  });

  // Add the <div> element to the document body
  document.body.appendChild(imageDiv);
}




window.addEventListener("beforeunload", showImage);
window.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    showImage();
  }
});
window.addEventListener("blur", showImage);

// Define a function to change the image source
function changeImageSrc(newSrc) {
  // Set the image source variable to the new URL
  imageSrc = newSrc;
  // If an image is already loaded, update the src attribute of the existing img element
  if (imageLoaded) {
    document.querySelector("img").src = newSrc;
  }
}

// Add an event listener to the document to show the image when "y" key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "y") {
    showImage();
  }
});
