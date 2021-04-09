function addItem() {
    // const input = document.getElementById('newItemText').value;

    // if (input.length !== 0) {
    //     const li = document.createElement('li');
    //     li.textContent = input;

    //     const a = document.createElement('a');
    //     a.textContent = '[Delete]';
    //     a.href = '#';
    //     li.appendChild(a);
        
    //     document.getElementById('items').appendChild(li);
    
    //     Array.from(li.children)[0].addEventListener('click', remove);
    
    //     document.getElementById('newItemText').value = '';
    // }

    

    // function remove(e) {
    //     e.target.parentNode.remove();
    // }


    const input = document.getElementById('newItemText');
    const liElement = createElement('li', input.value);


    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();
    })
    liElement.appendChild(deleteBtn);

    document.getElementById('items').appendChild(liElement);
    input.value = '';


    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}
