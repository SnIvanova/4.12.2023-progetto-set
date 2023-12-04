document.getElementById('toggle-search').addEventListener('click', function () {
    var searchForm = document.getElementById('search-form');
    searchForm.classList.toggle('d-none');
});

document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.new-releases-carousel .item');
    let currentImage = 0;
  
    function animateCarousel() {
      // Remove the 'active' class from the current image
      carouselItems[currentImage].classList.remove('active');
  
      // Move to the next image
      currentImage = (currentImage + 1) % carouselItems.length;
  
      // Add the 'active' class to the next image
      carouselItems[currentImage].classList.add('active');
    }
  
    // Set the initial animation
    animateCarousel();
  
    // Start the animation loop
    const carouselInterval = setInterval(animateCarousel, 4000);
  
    // Pause the animation on hover
    document.querySelector('.new-releases-carousel').addEventListener('mouseover', function () {
      clearInterval(carouselInterval);
    });
  
    // Resume the animation on mouse leave
    document.querySelector('.new-releases-carousel').addEventListener('mouseleave', function () {
      clearInterval(carouselInterval);
      setInterval(animateCarousel, 4000);
    });
  });