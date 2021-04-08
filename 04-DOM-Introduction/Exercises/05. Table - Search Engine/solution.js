function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const rows = Array.from(Array.from(document.getElementsByTagName('tbody'))[0].children);
      reset(rows);

      let input = document.getElementById('searchField').value;
      
      rows.forEach(row =>  {
         const tdItems = Array.from(row.children);

         tdItems.forEach(td => {
            if (td.textContent.toLowerCase().includes(input.toLowerCase())) {
               row.classList.add('select');
            }
         })
      });


      document.getElementById('searchField').value = '';
   }

   function reset(rows) {
      rows.forEach(row => row.classList.remove('select'));
   }
}