function deleteByEmail() {
    document.getElementById('result').textContent = '';

    const emailToDelete = Array.from(document.getElementsByTagName('input'))[0].value;

    const rows = Array.from(Array.from(document.getElementsByTagName('tbody'))[0].children);

    rows.forEach(element => {
        const email = Array.from(element.children)[1].textContent;
        if (email === emailToDelete) {
            element.remove();
            document.getElementById('result').textContent = 'Deleted.';
        }
    });

    if (document.getElementById('result').textContent !== 'Deleted.') {
        document.getElementById('result').textContent = 'Not found.';
    }

    Array.from(document.getElementsByTagName('input'))[0].value = '';
}