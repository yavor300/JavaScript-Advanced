function sumTable() {
    const table = Array.from(document.getElementsByTagName('table'))[0];

    const rows = Array.from(Array.from(table.children)[0].children);
    rows.shift();
    rows.pop();

    let sum = 0;

    rows.forEach(r => {
        const cost = Array.from(r.children)[Array.from(r.children).length - 1];
        sum += Number(cost.textContent);
    })

    document.getElementById('sum').textContent = sum;
}