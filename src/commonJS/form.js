const textarea = document.querySelector('.field');
textarea.addEventListener('keyup', e => {
  textarea.style.height = '63px';
  let sHeight = e.target.scrollHeight;
  textarea.style.height = `${sHeight}px`;
});
