import write from '../html/write.html';

const Editor = require('@toast-ui/editor');

// const editor = new Editor({
//   el: document.querySelector('#editor'),
//   height: '500px',
//   initialEditType: 'markdown',
//   previewStyle: 'vertical',
// });

const $root = document.querySelector('.root');

const writeRender = _html => {
  $root.innerHTML = _html;
};

const writeUrlEvents = () => {
  // editor.getHTML();
  writeRender(write);
  document.querySelector('.upload__form__submit').addEventListener('click', e => {
    e.preventDefault();
    console.log('test');
  });
};

export default writeUrlEvents;
