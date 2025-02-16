const compliments = [
  "Ты самая красивая!",
  "Ты самая умная!",
  "Ты самая добрая!",
  "Ты самая талантливая!",
  "Ты самая лучшая!",
  "Ты самая милая!",
  "Ты самая заботливая!",
  "Ты самая вдохновляющая!",
  "Ты самая яркая!",
  "Ты самая невероятная!",
  // Добавьте ещё 90 комплиментов :)
];

const gradients = [
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)",
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
  "linear-gradient(135deg, #f6d365, #fda085)",
];

let isSplit = false;

function getRandomCompliment() {
  return compliments[Math.floor(Math.random() * compliments.length)];
}

function getRandomGradient() {
  return gradients[Math.floor(Math.random() * gradients.length)];
}

function createHearts() {
  const heartContainer = document.createElement('div');
  heartContainer.classList.add('heart-container');
  document.body.appendChild(heartContainer);

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('small-heart');
    heart.textContent = '❤️';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
    heartContainer.appendChild(heart);
  }

  setTimeout(() => {
    heartContainer.remove();
  }, 2000);
}

function showCompliment() {
  const complimentText = document.getElementById('compliment');
  const randomCompliment = getRandomCompliment();
  complimentText.textContent = randomCompliment;
  complimentText.classList.remove('hidden');
  complimentText.classList.add('show');

  setTimeout(() => {
    complimentText.classList.remove('show');
    complimentText.classList.add('hidden');
  }, 3000);
}

function splitHeart() {
  const heart = document.getElementById('heart');
  heart.style.animation = 'split 1s ease-in-out';
  setTimeout(() => {
    heart.style.animation = 'pulse 2s infinite, rotate 5s infinite';
  }, 1000);
}

function handleHeartClick() {
  if (isSplit) {
    // Если сердце уже разделено, восстанавливаем его
    splitHeart();
    isSplit = false;
  } else {
    // Если сердце целое, разделяем его
    createHearts();
    showCompliment();
    splitHeart();
    isSplit = true;
  }

  // Меняем фон
  document.body.style.background = getRandomGradient();
}

function startDance() {
  const heart = document.getElementById('heart');
  heart.style.animation = 'dance 0.5s infinite';
}

function stopDance() {
  const heart = document.getElementById('heart');
  heart.style.animation = 'pulse 2s infinite, rotate 5s infinite';
}