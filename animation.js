const cards = document.querySelectorAll(".joker");
const audioHover = document.querySelector('.audioC1');
const audioClick = document.querySelector('.audioC2');
const boton = document.querySelector('.button');
const audioBoton = document.querySelector('.audioB');

// Efecto de rotación al mover el mouse
cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (rect.width / 2 - (e.clientX - rect.left)) / 10;
    const y = (rect.height / 2 - (e.clientY - rect.top)) / 10;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });

  // Sonido al pasar el mouse
  card.addEventListener('mouseenter', () => {
    audioHover.currentTime = 0;
    audioHover.play();
  });

  // Sonido al hacer click
  card.addEventListener('click', () => {
    audioClick.currentTime = 0;
    audioClick.play();
  });
});

// Sonido del botón
boton.addEventListener('click', () => {
  audioBoton.currentTime = 0;
  audioBoton.play();
});