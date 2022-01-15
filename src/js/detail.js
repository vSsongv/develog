import axios from 'axios';
import header from './header';
import detail from '../html/detail.html';

const detailHtml = detail;
const detailEvent = async () => {
  header.headerEvent();

  const url = window.location.pathname.split('/');
  try {
    const data = await axios.get(`/posts/${url[url.length - 1]}`);
    if (data.status === 200) {
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }

  const $textarea = document.querySelector('.textarea');
  const $textareaCancel = document.querySelector('.textarea__cancel');

  // postevents

  // textarea evetns
  $textarea.addEventListener('focus', () => {
    $textareaCancel.removeAttribute('disabled');
    $textareaCancel.classList.toggle('no-display');
    $textareaCancel.style.color = 'black';
    $textareaCancel.style.cursor = 'pointer';
    document.querySelector('.textarea__cancel').addEventListener('click', () => {
      $textarea.value = '';
    });
  });

  $textarea.addEventListener('blur', () => {
    $textareaCancel.setAttribute('disabled');
    $textareaCancel.classList.toggle('no-display');
    $textareaCancel.style.color = 'transparent';
    $textareaCancel.style.cursor = 'unset';
  });
};

// export default render;
export default {
  detailHtml,
  detailEvent,
};
