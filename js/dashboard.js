document.querySelectorAll('.skill__card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked on ${card.querySelector('h3').textContent}`);
    });
  });

     // Fungsi untuk mendeteksi apakah elemen dalam viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Fungsi untuk menambahkan atau menghapus kelas 'scroll-active'
  function animateOnScroll() {
    const zoomElements = document.querySelectorAll('.zoom-in');
    
    zoomElements.forEach(function(el) {
      if (isElementInViewport(el)) {
        el.classList.add('scroll-active');
      }
    });
  }
  
  // Trigger fungsi saat halaman di-scroll atau dimuat
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
  