//  alert("Yay diamond touches the fake diamond")
// Try to unmute after 3 seconds
setTimeout(() => {
    music.muted = false;
    music.play().then(() => {
      console.log("Music unmuted successfully.");
    }).catch((error) => {
      console.warn("Autoplay with sound was blocked. User interaction needed.");
      showPlayButton();
    });
  }, 3000);
  
  function showPlayButton() {
    const btn = document.createElement("button");
    btn.textContent = "Play Music";
    btn.style = "position:fixed; top:20px; left:20px; z-index:999; padding:10px;";
    btn.onclick = () => {
      music.muted = false;
      music.play();
      btn.remove();
    };
    document.body.appendChild(btn);
  }