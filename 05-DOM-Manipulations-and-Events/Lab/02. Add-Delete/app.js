function addItem() {
    const input = document.getElementById('newItemText').value;

    if (input.length !== 0) {
        const li = document.createElement('li');
        li.innerHTML += input + '<a href="#">[Delete]</a>'
        document.getElementById('items').appendChild(li);
    
        Array.from(li.children)[0].addEventListener('click', remove);
    
        document.getElementById('newItemText').value = '';
    }

    

    function remove(e) {
        e.target.parentNode.remove();
    }
}