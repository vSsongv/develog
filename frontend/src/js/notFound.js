import notFound from '../html/notFound.html';

const notFoundNode = () => {
  const node = document.createElement('div');
  node.innerHTML = notFound;

  return node.children;
}

export default notFoundNode;