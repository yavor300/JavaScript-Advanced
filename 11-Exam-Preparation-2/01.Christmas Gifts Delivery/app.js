function solution() {
    const domElements = {
        addGiftButton: document.querySelector('button'),
        addGiftInput: document.querySelector('input'),
        listOfGiftsUl: document.querySelector('ul'),
        sentGiftsUl: Array.from(document.querySelectorAll('ul'))[1],
        discardedGiftsUl: Array.from(document.querySelectorAll('ul'))[2]
    };

    domElements.addGiftButton.addEventListener('click', addGift);
    domElements.listOfGiftsUl.addEventListener('click', sendOrDiscardGift);

    function sendOrDiscardGift(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Send') {
            const li = ev.target.parentNode;
            Array.from(li.children)
                .forEach(child => {
                   child.remove();
                });
            domElements.sentGiftsUl.appendChild(li);
        } else if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Discard') {
            const li = ev.target.parentNode;
            Array.from(li.children)
                .forEach(child => {
                    child.remove();
                });
            domElements.discardedGiftsUl.appendChild(li);
        }
    }

    function addGift() {
        if (domElements.addGiftInput.value) {
            const li = createElement('li', domElements.addGiftInput.value);
            li.classList.add('gift');

            const sendButton = createElement('button', 'Send');
            sendButton.id = 'sendButton';

            const discardButton = createElement('button', 'Discard');
            discardButton.id = 'discardButton';

            appendElements(domElements.listOfGiftsUl, appendElements(li, sendButton, discardButton));

            const gifts = Array.from(domElements.listOfGiftsUl.children);
            domElements.listOfGiftsUl.innerHTML = '';

            gifts.sort((f, s) => f.textContent.localeCompare(s.textContent))
                .forEach(gift => {
                    appendElements(domElements.listOfGiftsUl, gift);
                });

            domElements.addGiftInput.value = '';
        }

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