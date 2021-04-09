function addItem() {
    const input = document.getElementById('newItemText').value;

    if (input.length !== 0) {
        const li = document.createElement('li');
        li.textContent = input;

        const a = document.createElement('a');
        a.textContent = '[Delete]';
        a.href = '#';
        li.appendChild(a);
        
        document.getElementById('items').appendChild(li);
    
        Array.from(li.children)[0].addEventListener('click', remove);
    
        document.getElementById('newItemText').value = '';
    }

    

    function remove(e) {
        e.target.parentNode.remove();
    }
}
