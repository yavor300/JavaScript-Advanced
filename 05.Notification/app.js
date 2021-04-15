function notify(message) {
  const divNotification = document.querySelector('#notification');

  if (Array.from(divNotification.children).length === 0) {
    const divMessage = createElement('div', message);
    appendElements(divNotification, divMessage);
  }

  divNotification.style.display = 'block';

  divNotification.addEventListener('click', () => {
    divNotification.style.display = 'none';
  });

  if (divNotification.style.display === 'none') {
    divNotification.style.display = 'block';
  }

  function createElement(type, content) {
    const result = document.createElement(type);
    result.textContent = content;
    return result;
  }

  function appendElements(parent, ...children) {
    children.forEach(child => {
      parent.appendChild(child);
    });
    return parent;
  }
}