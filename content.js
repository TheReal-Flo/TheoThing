// List of t3dotgg video IDs
const videoIds = [
  "_DnNzRaBWUU", // i made my own search engine (kind of)
  "uUhpy1SLhRw", // Civet is a beautiful attempt to fix TypeScript
  "a3j4olgIjk8", // BREAKING: Claude 3.7 just dropped and it's insane
  "_D_KVPYnub0", // Can we put Rust in Angular to make it faster? WASM deep dive
  "U8L_KOQmDj4", // Responding to Prime's take about frontend frameworks
  "7_jpgSfOI58", // I built an iPhone app with AI
  "WVpaBTqm-Zo", // Grok 3 is an...interesting model
  "3gVBjTMS8FE", // My chaotic journey to find the right database
  "jCv0KSxMqlo", // Killer OSS LLM dominating leaderboards
  "gj2REv4D380", // The CSS "function" proposal is WILD
  "UdNjXF2TTvE", // The worst code I've ever seen
  "ATn3X7WLy84", // Is This The End Of T3 Stack? (JStack Breakdown)
  "PmVONwkYsg8", // Claude Almost Bankrupt Me...
  "8otpw68_C0Q", // Gemini 2.0 blew me away
  "c-hKSbzooAg", // My Biggest Tutorial Ever
  "dPUzOQdUFSg", // I'm Finally Moving On (I have a new browser)
  "Wdyndb17K58", // I Fixed Stripe
  "INLq9RPAYUw", // Why is every React site so slow?
  "WhPAAMHERzM", // A whiteboard but it's AI and also a computer?
  "Y5JrsqBt7sI", // Bun's FINALLY A Bundler
  "QLvIoi2s1zY", // How I Built T3 Chat in 5 Days
  "bIr7NtNRDmE", // My new app is here. It's really fast.
  "vf7bI5nZyi8", // Netflix Removed React?
  "EEUiPjLY1c0", // Why is everyone so unhappy with JavaScript?
  "_VQl_HTk9PM", // Serverless: A Comprehensive Breakdown
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
