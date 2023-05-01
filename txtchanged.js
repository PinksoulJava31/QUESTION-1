

const textArray = [
  "Explore my webpages.",
  "Read my latest blog post.",
  "Join my newsletter for exclusive content.",
  "Connect with me on social media."
];

let index = 0;
const changingText = document.querySelector("#changing-text");

setInterval(() => {
  index = (index + 1) % textArray.length;
  changingText.innerHTML = `
    <h2>${textArray[index]}</h2>
    <p>Check out my amazing content below.</p>
  `;
}, 3000);
