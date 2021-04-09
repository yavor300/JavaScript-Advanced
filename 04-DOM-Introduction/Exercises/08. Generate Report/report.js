function generateReport() {
    const tableHeaders = Array.from(document.getElementsByTagName('thead')[0].children[0].children);

    const checkedColumnIndexes = [];

    tableHeaders.forEach((th, i) => {
        if (th.children[0].checked == true) {
            checkedColumnIndexes.push(i);
        }
    });


    const rows = Array.from(Array.from(document.getElementsByTagName('tbody'))[0].children);
    
    const result = [];

    checkedColumnIndexes.forEach((index, iter) => {
        const columnName = tableHeaders[index].children[0].name;

        rows.forEach((row, i) => {
            const obj = {};
            obj[columnName] = row.children[index].textContent;

            if (iter === 0) {
                result.push(obj);
            } else {
                Object.assign(result[i], obj);
            }
            
        });
    });
    
    document.getElementById('output').value = JSON.stringify(result, null, 2);
}