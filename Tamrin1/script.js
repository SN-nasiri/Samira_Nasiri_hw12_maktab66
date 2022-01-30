let date = [];
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('open-modal').classList.remove('hidden');
  setTimeout(() => {
    form.submit();
  }, 8000)
})
document.querySelector('.modal-close').addEventListener('click', () => {
  document.getElementById('open-modal').classList.add('hidden');
});
