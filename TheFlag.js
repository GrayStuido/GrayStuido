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
  
  // Function to update favicon
  function updateFavicon() {
    // Create a new link element to update the favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = faviconImages[currentIndexFavicon];
    
    // Append the new link element to the head
    document.head.appendChild(link);
    
    // Increment currentIndex to cycle through the images
    currentIndexFavicon = (currentIndexFavicon + 1) % faviconImages.length;
  }
  
  // Update favicon immediately on page load
  updateFavicon();
  
  // Update favicon every 100 milliseconds (adjust interval as needed)
  const intervalId = setInterval(updateFavicon, 100);
  