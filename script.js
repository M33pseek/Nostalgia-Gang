document.addEventListener("DOMContentLoaded", function () {
  const openingText = document.getElementById("openingText");
const coverImg = document.querySelector(".coverimg");

  const text =
    "This website is filled with Nostalgia Gang comics. The purposes of the Nostalgia Gang in roblox is confidential and only members know it. If you find out, you saw nothing. P.S the video above is KJ from the strongest battlegrounds, I really like that character and the whole game. That's why I've been called Roblox addict (lol).";

  let index = 0;

  function type() {
    if (index < text.length) {
      openingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }
  setTimeout(() => {
    type(); 
  }, 500);
});
