function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      document.querySelector('#bestRestaurant p').textContent = '';
      document.querySelector('#workers p').textContent = '';

      const restaurants = {};

      const input = JSON.parse(Array.from(document.getElementsByTagName('textarea'))[0].value);
      
      input.forEach(data => {
         const restaurantData = data.split(', ');

         const restaurantNameAndWorker = restaurantData.shift();
         const restaurantName = restaurantNameAndWorker.split(' - ')[0];
         
         const [...workers] = restaurantData;
         workers.unshift(restaurantNameAndWorker.split(' - ')[1]);

         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = {
               workers: [],
               averageSalary: 0,
               highestSalary: 0
            };

            workers.forEach(w => {
               const workersData = w.split(' ');
               restaurants[restaurantName].workers.push(
                  {
                     worker: workersData[0],
                     salary: Number(workersData[1])
                  }
                  );
            });
         } else {
            workers.forEach(w => {
               const workersData = w.split(' ');
               restaurants[restaurantName].workers.push(
                  {
                     worker: workersData[0],
                     salary: Number(workersData[1])
                  }
                  );
            });
         }

         let total = 0;
         let highest = -1;
         restaurants[restaurantName].workers.forEach(workerObj => {
            total += workerObj.salary;
            if (workerObj.salary > highest) {
               highest = workerObj.salary;
            }
         });

         restaurants[restaurantName].averageSalary = (total /  restaurants[restaurantName].workers.length).toFixed(2);
         restaurants[restaurantName].highestSalary = highest;

      });
      
     const sortable = [];
     for (const restaurant in restaurants) {
         sortable.push([restaurant, restaurants[restaurant]]);
     };
     
     sortable.sort(function(a, b) {
         return b[1].averageSalary - a[1].averageSalary;
     });
     console.log(sortable)
     document.querySelector('#bestRestaurant p').textContent = 
     `Name: ${sortable[0][0]} Average Salary: ${sortable[0][1].averageSalary} Best Salary: ${sortable[0][1].highestSalary.toFixed(2)}`;

     sortable[0][1].workers.sort((a, b) => b.salary - a.salary).forEach(worker => {
        document.querySelector('#workers p').textContent += `Name: ${worker.worker} With Salary: ${worker.salary} `
     });
   }
}