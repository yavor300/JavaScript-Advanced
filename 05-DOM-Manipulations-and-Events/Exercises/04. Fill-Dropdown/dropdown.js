function addItem() {
    let newItemText = document.querySelector('#newItemText').value;
    const newItemValue = document.querySelector('#newItemValue').value;

    const option = document.createElement('option');
    option.textContent = newItemText;
    option.value = newItemValue;

    document.querySelector('#menu').appendChild(option);

    document.querySelector('#newItemText').value = ''
    document.querySelector('#newItemValue').value = '';
}