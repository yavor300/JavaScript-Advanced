function colorize() {
    const rows = Array.from(document.getElementsByTagName('tr'));
    rows.shift();
    rows.forEach((r, i) => {
        if (i % 2 === 0) {
            r.style.backgroundColor = 'Teal';
        }
    })
}