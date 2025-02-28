// List of t3dotgg video IDs
const videoIds = [
    "TKn5XBJ8Yaw", // Example: Theo's videos
    "uqII0AOW1NM",
    "aZLE5z_UHM0", 
    "2uzzN3mQw0I",
    "6yBv-_COJGk",
    "T7V9XGn0tXE",
    "qCX8rw4qOSA",
    "YxxQSaW3D-Y",
    "quiwVAoJ0dw",
    "dXUsAcLDphU"
  ];
  
  function replacePage() {
    // Select a random video ID
    const randomVideoId = videoIds[Math.floor(Math.random() * videoIds.length)];
    
    // Create thumbnail URL (using high quality thumbnail)
    const thumbnailUrl = `https://i.ytimg.com/vi/${randomVideoId}/hqdefault.jpg`;
    
    // Create the new page content
    const newContent = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #1a1a1a; margin: 0; padding: 0;">
        <h1 style="color: white; font-family: Arial, sans-serif; margin-bottom: 20px;">This website has been Theo-ified!</h1>
        <div style="position: relative; width: 80%; max-width: 640px;">
          <img src="${thumbnailUrl}" alt="Random t3dotgg thumbnail" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.5);">
        </div>
        <p style="color: #ccc; font-family: Arial, sans-serif; margin-top: 20px;">
          Powered by t3dotgg thumbnail randomizer - 
          <a href="https://youtube.com/t3dotgg" style="color: #ff4444; text-decoration: none;">
            Visit Theo's channel
          </a>
        </p>
      </div>
    `;
    
    // Replace the entire page content
    document.body.innerHTML = newContent;
    document.title = "T3-ified: " + document.title;
  }
  
  // Execute the replacement
  replacePage();
  