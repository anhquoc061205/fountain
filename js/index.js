const categori = document.querySelector('.categori');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  nextBtn.addEventListener('click', () => {
    categori.scrollBy({ left: 200, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    categori.scrollBy({ left: -200, behavior: 'smooth' });
  });