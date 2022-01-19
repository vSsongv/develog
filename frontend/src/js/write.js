import write from '../html/write.html';

const $root = document.querySelector('.root');

const writeNode = () => {
  const node = document.createElement('div');
  node.innerHTML = write;

  node.querySelector('.upload__form__submit').addEventListener('click', e => {
    e.preventDefault();
    console.log('test');
  });
  return node.children;
};
export default writeNode;
