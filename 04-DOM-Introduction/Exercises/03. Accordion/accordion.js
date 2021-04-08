function toggle() {
    const buttonText = Array.from(document.getElementsByClassName('button'))[0].textContent;

    if (buttonText === 'More') {
        document.getElementById('extra').style.display = 'block';
        Array.from(document.getElementsByClassName('button'))[0].textContent = 'Less';
    } else {
        document.getElementById('extra').style.display = 'none';
        Array.from(document.getElementsByClassName('button'))[0].textContent = 'More';
    }
}