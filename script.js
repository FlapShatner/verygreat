document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('typing-text');
  const word = 'VeryGreat';

  const fonts = [
    'Bungee Shade',
    'Codystar',
    'Cute Font',
    'DotGothic16',
    'Doto',
    //   'Faster One',
    'Hachi Maru Pop',
    'Jersey 10',
    'Jolly Lodger',
    'Long Cang',
    'Micro 5',
    'Monofett',
    'MuseoModerno',
    'Nabla',
    'Nosifer',
    'Permanent Marker',
    'Pixelify Sans',
    'Pompiere',
    '"Press Start 2P"',
    'Raleway Dots',
    'Rampart One',
    'Ranchers',
    'Rock 3D',
    'Rock Salt',
    'Rubik Doodle Shadow',
    'Rubik Glitch',
    'Rubik Mono One',
    'Rubik Vinyl',
    'Rubik Wet Paint',
    'Rye',
    '"Sedgwick Ave Display"',
    'Shizuru',
    'Silkscreen',
    'Sixtyfour',
    '"Swanky and Moo Moo"',
    'Tiny5',
    'Truculenta',
    'Underdog',
    'VT323',
    '"Waiting for the Sunrise"',
    'Workbench',
    '"Yuji Boku"',
    'Zeyada',
  ];

  let fontIndex = 0;
  let charIndex = 0;
  let isTyping = true;

  const typeSpeed = 150;
  const backspaceSpeed = 100;
  const pauseDuration = 1500;

  function typeEffect() {
    textElement.style.fontFamily = fonts[fontIndex];
    textElement.classList.remove('paused');

    if (isTyping) {
      if (charIndex < word.length) {
        textElement.textContent += word.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, typeSpeed);
      } else {
        isTyping = false;
        textElement.classList.add('paused');
        setTimeout(typeEffect, pauseDuration);
      }
    } else {
      if (charIndex > 0) {
        textElement.textContent = word.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, backspaceSpeed);
      } else {
        isTyping = true;
        fontIndex = (fontIndex + 1) % fonts.length;
        setTimeout(typeEffect, typeSpeed);
      }
    }
  }

  typeEffect();
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('Hi there');
  const logo = document.getElementById('logo');
  const copyrightElement = document.getElementById('copyright');
  const currentYear = new Date().getFullYear();
  copyrightElement.textContent = `© ${currentYear} `;
  logo.addEventListener('click', () => {
    logo.classList.add('dropAndSwing');
  });
});
