const btnsContainer = document.querySelector('.buttons');
const textContainer = document.getElementById('text');

btnsContainer.addEventListener('click', e => {
  const btns = btnsContainer.querySelectorAll('[data-font-size]');

  if (e.target.classList.contains('btn')) {
    [...btns].forEach(btn => btn.classList.remove('active'));

    e.target.classList.add('active');
    textContainer.style.fontSize = `${e.target.dataset.fontSize}em`;
  }
});
