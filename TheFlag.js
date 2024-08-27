// Array of favicon images to cycle through
const faviconImages = [
  'TheFlag/frame_00.png',
  'TheFlag/frame_01.png',
  'TheFlag/frame_02.png',
  'TheFlag/frame_03.png',
  'TheFlag/frame_04.png',
  'TheFlag/frame_05.png',
  'TheFlag/frame_06.png',
  'TheFlag/frame_07.png',
  'TheFlag/frame_08.png',
  'TheFlag/frame_09.png',
  'TheFlag/frame_10.png'
];

let currentIndexFavicon = 0;
let animationFrameId = null;
let lastUpdateTime = 0;
const updateInterval = 100; // Update every 100ms

// Function to update favicon
function updateFavicon(timestamp) {
  // Check if enough time has passed since the last update
  if (timestamp - lastUpdateTime >= updateInterval) {
    // Create a new link element to update the favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png'; // Specify the image type
    link.href = faviconImages[currentIndexFavicon];
    
    // Remove the existing favicon link if it exists
    const existingLink = document.querySelector('link[rel*="icon"]');
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
    
    // Append the new link element to the head
    document.head.appendChild(link);
    
    // Increment currentIndex to cycle through the images
    currentIndexFavicon = (currentIndexFavicon + 1) % faviconImages.length;
    
    // Update the last update time
    lastUpdateTime = timestamp;
  }
  
  // Request the next animation frame
  animationFrameId = requestAnimationFrame(updateFavicon);
}

// Function to start the animation
function startFaviconAnimation() {
  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(updateFavicon);
  }
}

// Function to stop the animation
function stopFaviconAnimation() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

// Check if the page is visible and start/stop animation accordingly
function handleVisibilityChange() {
  if (document.hidden) {
    stopFaviconAnimation();
  } else {
    startFaviconAnimation();
  }
}

// Add event listener for visibility change
document.addEventListener('visibilitychange', handleVisibilityChange);

// Start the animation when the script loads
startFaviconAnimation();

// Fallback for browsers that don't support requestAnimationFrame
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function(callback) {
    return setTimeout(function() {
      callback(Date.now());
    }, 1000 / 60); // Aim for 60fps
  };
  
  window.cancelAnimationFrame = function(id) {
    clearTimeout(id);
  };
}

// Preload images to ensure smooth animation
faviconImages.forEach(src => {
  const img = new Image();
  img.src = src;
});
