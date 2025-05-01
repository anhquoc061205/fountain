
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

  // menu
  const menuToggle = document.getElementById("menu_toggle");
  const mobileNav = document.getElementById("mobile_nav")
  const barsIcon = document.getElementById("bar_icon")
  const closeIcon = document.getElementById("close_icon")
  // Add event for menuToggel
    menuToggle.addEventListener("click", function (){  
    mobileNav.classList.toggle("active")

    
  if(mobileNav.classList.contains("active")){
      // đã bấm vào Icon => ấn bar icon và hiện close icon
      barsIcon.style.display = "none"
      closeIcon.style.display = "block"
  }else{
      barsIcon.style.display = "block"
      closeIcon.style.display = "none"
  }
 
  }) 
})