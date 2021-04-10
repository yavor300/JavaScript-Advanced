function create(words) {

   words.forEach(word => {
      const div = document.createElement('div');

      const p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = word;

      div.appendChild(p);
   
      const content = document.getElementById('content');
      content.appendChild(div);
   
      div.addEventListener('click', (ev) => {
         p.style.display = 'block';
      })
   })
   
}