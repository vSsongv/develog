const Editor = require('@toast-ui/editor');

const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '500px',
  initialEditType: 'markdown',
  previewStyle: 'vertical',
});

editor.getHTML();

document.querySelector('.upload__form__submit').addEventListener('click', e => {
  e.preventDefault();
  console.log('test');
});
