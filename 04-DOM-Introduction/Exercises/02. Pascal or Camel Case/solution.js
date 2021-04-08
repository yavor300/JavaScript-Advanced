function solve() {
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;

  const words = text.split(' ').map(w => w.toLowerCase());
  let result = '';

  if (convention === 'Camel Case') {
    words.forEach((w, i) => {
        if (i === 0) {
          result += w;
        } else {
          result += w.charAt(0).toUpperCase() + w.slice(1);
        }  
    });
  } else if (convention === 'Pascal Case') {
    words.forEach(w => result += w.charAt(0).toUpperCase() + w.slice(1));
  } else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}