function extract(content) {
    const text = document.getElementById(content).textContent;
    
    const regex = /\(([^)]+)\)/g;
    
    const result = [];

    let m;
    while ((m = regex.exec(text)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
    
    m.forEach((match, groupIndex) => {
        if (groupIndex === 1) {
            result.push(match);
            }
        });
    }
    return result.join(';');
}