


// document.addEventListener('mousemove', (e) => {
//     const xPercent = parseInt(e.pageX / window.innerWidth*360);
//     const yPercent = parseInt(e.pageY / window.innerHeight*360);
//     document.documentElement.style.setProperty('--mouse-x', `${xPercent}deg`);
//     document.documentElement.style.setProperty('--mouse-y', `${yPercent}deg`);
//     const mouseX = parseInt(e.pageX / window.innerWidth * 255);
//     document.documentElement.style.setProperty(
//         '--background', `linear-gradient(45deg, rgb(${mouseX},${mouseX},${mouseX}),#1F1B4E)`);
// });

// dom elements
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = () => {
    body.classList.replace('light','dark');
    localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark','light');
    localStorage.setItem('theme', 'light');
};

solarButton.onclick = () => {

    if (body.classList.contains('solar')) {
      
      body.classList.remove('solar'); 
      localStorage.removeItem('isSolar');
  
    } else {
      body.classList.add('solar'); 
      localStorage.setItem('isSolar', true);
    }

}
