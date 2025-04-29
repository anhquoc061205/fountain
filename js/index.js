
document.addEventListener("DOMContentLoaded", function (){
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


   window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

 
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

 
})