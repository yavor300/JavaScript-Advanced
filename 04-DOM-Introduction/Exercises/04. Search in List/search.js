function search() {
   const towns = Array.from(document.getElementById('towns').children);
   reset(towns);

   const pattern = document.getElementById('searchText').value;
   let counter = 0;

   towns.forEach(word => {
      if (word.textContent.toLowerCase().includes(pattern.toLowerCase())) {
         word.style.textDecoration = 'underline';
         word.style.fontWeight = 'bold';
         counter++;
      }
   });

   document.getElementById('result').textContent = `${counter} mathces found`;

   function reset(towns) {
      towns.forEach(word => {
         word.style.textDecoration = '';
         word.style.fontWeight = '';
      });
      document.getElementById('result').textContent = '';
   }
}
