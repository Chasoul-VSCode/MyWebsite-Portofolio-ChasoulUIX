document.querySelectorAll('.skill__card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked on ${card.querySelector('h3').textContent}`);
    });
  });