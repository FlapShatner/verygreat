document.addEventListener('DOMContentLoaded', () => {
 const textElement = document.getElementById('typing-text')
 const word = 'VeryGreat'

 // IMPORTANT: List font family names EXACTLY as defined in the Google Fonts CSS
 const fonts = [
  'Bungee Shade',
  'Codystar',
  'Cute Font',
  'DotGothic16',
  'Doto',
  'Faster One',
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
  '"Press Start 2P"', // Needs quotes
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
  '"Sedgwick Ave Display"', // Needs quotes
  'Shizuru',
  'Silkscreen',
  'Sixtyfour',
  '"Swanky and Moo Moo"', // Needs quotes
  'Tiny5',
  'Truculenta',
  'Underdog',
  'VT323',
  '"Waiting for the Sunrise"', // Needs quotes
  'Workbench',
  '"Yuji Boku"', // Needs quotes
  'Zeyada',
 ]

 let fontIndex = 0
 let charIndex = 0
 let isTyping = true

 const typeSpeed = 150 // Milliseconds per character typed
 const backspaceSpeed = 100 // Milliseconds per character deleted
 const pauseDuration = 1500 // Milliseconds to pause after word is typed

 function typeEffect() {
  // Set current font
  textElement.style.fontFamily = fonts[fontIndex]
  textElement.classList.remove('paused') // Ensure cursor is visible

  if (isTyping) {
   // --- Typing ---
   if (charIndex < word.length) {
    textElement.textContent += word.charAt(charIndex)
    charIndex++
    setTimeout(typeEffect, typeSpeed)
   } else {
    // Finished typing, pause then start backspacing
    isTyping = false
    textElement.classList.add('paused') // Hide cursor during pause
    setTimeout(typeEffect, pauseDuration)
   }
  } else {
   // --- Backspacing ---
   if (charIndex > 0) {
    textElement.textContent = word.substring(0, charIndex - 1)
    charIndex--
    setTimeout(typeEffect, backspaceSpeed)
   } else {
    // Finished backspacing, move to next font and start typing again
    isTyping = true
    fontIndex = (fontIndex + 1) % fonts.length // Cycle through fonts
    // No extra pause needed here, the typeSpeed delay will handle the start
    setTimeout(typeEffect, typeSpeed)
   }
  }
 }

 // Start the effect
 typeEffect()
})

document.addEventListener('DOMContentLoaded', () => {
 console.log('Hi there')
 const copyrightElement = document.getElementById('copyright')
 const currentYear = new Date().getFullYear()
 copyrightElement.textContent = `© ${currentYear} Jordan Roberts`
})
