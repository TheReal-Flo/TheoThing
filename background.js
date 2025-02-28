// Register the content script to run on all pages
chrome.runtime.onInstalled.addListener(() => {
    console.log("TheoThing installed!");
  });
  
  // You would also need to create or download two icon files:
  // icon48.png (48x48 pixels)
  // icon128.png (128x128 pixels)
  