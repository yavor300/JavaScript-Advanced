function extractText() {
    const textArea = document.getElementById('result');
    const liItems = Array.from(document.getElementsByTagName('li')).map(liItems => liItems.textContent);
    textArea.textContent = liItems.join('\n');
}