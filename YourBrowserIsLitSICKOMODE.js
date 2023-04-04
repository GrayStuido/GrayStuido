// Set the URL of the Minecraft fire GIF
const gifUrl = "https://static.wikia.nocookie.net/minecraftpocketedition/images/a/a5/Fire.gif";

// Set the default spawn rate
let spawnRate = 1;

// Create a function to "spawn" the Minecraft fire GIF
function spawnFire() {
  // Create a new img element for the GIF
  const img = document.createElement("img");

  // Set the src attribute to the specified GIF URL
  img.src = gifUrl;

  // Set the position of the image to a random location on the page, with a width and height of 30px
  img.style.position = "absolute";
  img.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  img.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
  img.style.width = "30px";
  img.style.height = "30px";

  // Add the image to the page
  document.body.appendChild(img);

  // Add an event listener to the image to destroy it when hovered over
  img.addEventListener("mouseover", () => {
    img.parentNode.removeChild(img);
  });
}

// Call the spawnFire function every spawnRate milliseconds to "spawn" a new Minecraft fire GIF
setInterval(spawnFire, spawnRate);

// Add an event listener to the document to listen for the "keydown" event
document.addEventListener("keydown", (event) => {
  // If the Ctrl + U keys are pressed simultaneously, prompt the user to enter a new spawn rate
  if (event.ctrlKey && event.code === "KeyI") {
    const newSpawnRate = prompt("Enter the new spawn rate (in milliseconds):");
    if (newSpawnRate) {
      // Update the spawn rate with the user's input
      spawnRate = parseInt(newSpawnRate);
      // Reset the interval with the new spawn rate
      clearInterval(intervalId);
      intervalId = setInterval(spawnFire, spawnRate);
    }
  }
});
