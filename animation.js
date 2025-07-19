const card1 = document.querySelector(".card1");

card1.addEventListener("mousemove", (e) => {
  const rect = card1.getBoundingClientRect();
  const x = (rect.width / 2 - (e.clientX - rect.left)) / 10;
  const y = (rect.height / 2 - (e.clientY - rect.top)) / 10;
  card1.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

card1.addEventListener("mouseleave", () => {
  card1.style.transform = "rotateY(0deg) rotateX(0deg)";
});

const card2 = document.querySelector(".card2");

card2.addEventListener("mousemove", (e) => {
  const rect = card2.getBoundingClientRect();
  const x = (rect.width / 2 - (e.clientX - rect.left)) / 10;
  const y = (rect.height / 2 - (e.clientY - rect.top)) / 10;
  card2.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

card2.addEventListener("mouseleave", () => {
  card2.style.transform = "rotateY(0deg) rotateX(0deg)";
});

const card3 = document.querySelector(".card3");

card3.addEventListener("mousemove", (e) => {
  const rect = card3.getBoundingClientRect();
  const x = (rect.width / 2 - (e.clientX - rect.left)) / 10;
  const y = (rect.height / 2 - (e.clientY - rect.top)) / 10;
  card3.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

card3.addEventListener("mouseleave", () => {
card3.style.transform = "rotateY(0deg) rotateX(0deg)";
});

  const boton = document.querySelector('.button');
  const audio = document.querySelector('.audioB');

  boton.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });

    const imagen1 = document.querySelector('.card1');
    const audioHover1 = document.querySelector('.audioC1');
    const audioClick1 = document.querySelector('.audioC2');

    // Sonido al pasar el mouse
    imagen1.addEventListener('mouseenter', () => {
      audioHover1.currentTime = 0;
      audioHover1.play();
    });

    // Sonido al hacer clic
    imagen1.addEventListener('click', () => {
      audioClick1.currentTime = 0;
      audioClick1.play();
    });

    const imagen2 = document.querySelector('.card2');
    const audioHover2 = document.querySelector('.audioC1');
    const audioClick2 = document.querySelector('.audioC2');

    imagen2.addEventListener('mouseenter', () => {
      audioHover2.currentTime = 0;
      audioHover2.play();
    });

    imagen2.addEventListener('click', () => {
      audioClick2.currentTime = 0;
      audioClick2.play();
    });

    const imagen3 = document.querySelector('.card3');
    const audioHover3 = document.querySelector('.audioC1');
    const audioClick3 = document.querySelector('.audioC2');

    imagen3.addEventListener('mouseenter', () => {
      audioHover3.currentTime = 0;
      audioHover3.play();
    });

    imagen3.addEventListener('click', () => {
      audioClick3.currentTime = 0;
      audioClick3.play();
    });