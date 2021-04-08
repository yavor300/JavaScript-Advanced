function solve() {
  document.getElementById('output').innerHTML = '';

  const text = document.getElementById('input').value;
  const sentences = text.split('.').filter(s => s.trim().length !== 0);

  let result = '';

  if (sentences.length <= 3) {
    sentences.forEach(s => result += (s + '.'));
    document.getElementById('output').innerHTML = (`<p>${result}</p>`);
  } else {
    for (let i = 1; i <= sentences.length; i++) {
      result += (sentences[i - 1] + '.');
      if (i % 3 === 0) {
        document.getElementById('output').innerHTML += (`<p>${result}</p>`);
        result = '';
      }
    }

    if (result.trim().length > 0) {
      document.getElementById('output').innerHTML += (`<p>${result}</p>`);
    }
  }
}