function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = document.querySelector('textarea');
      input = JSON.parse(input.value);

      let restaurants = {}

      for (let i = 0; i < input.length; i++) {
         let restaurant = input[i];

         restaurant = restaurant.split(' - ').filter(x => x);
         if (!restaurants.hasOwnProperty(restaurant[0])) {
            restaurants[restaurant[0]] = restaurant[1].split(', ').filter(x => x);
         } else {
            // must update old salaries if JUDGE me bad
            restaurants[restaurant[0]].push(...restaurant[1].split(', ').filter(x => x));
         }
      }
      let result = {};
      for (const name in restaurants) {

         result[name] = {};
         
         result[name]['bestSalary'] = 0;
         let allSalaries = 0;
         let counter = 0;
         for (const worker of restaurants[name]) {
            counter++;
            let [workerName, salary] = worker.split(' ').filter(x => x);
            salary = Number(salary);
            result[name][workerName] = salary;
            allSalaries += salary;
            if (result[name]['bestSalary'] < salary) {
               result[name]['bestSalary'] = salary;
            }
         }

         result[name]['averageSalary'] = Number((allSalaries / counter).toFixed(2));
         
      }

      let winner = Object.entries(result).sort((a, b) => b[1]['averageSalary'] - a[1]['averageSalary'])[0];

      let bestRestaurant = `Name: ${winner[0]} Average Salary: ${winner[1]['averageSalary'].toFixed(2)} Best Salary: ${winner[1]['bestSalary'].toFixed(2)}`;
      delete winner[1]['averageSalary'];
      delete winner[1]['bestSalary'];

      let workers = Object.entries(winner[1]).sort((a, b) => b[1] - a[1]);
      let bestWorkers = '';
      for (let i = 0; i < workers.length; i++) {
         const element = workers[i];
         bestWorkers += `Name: ${element[0]} With Salary: ${element[1]} `;
      }


      let restaurantInput = document.querySelector('#bestRestaurant p');
      let workersInput = document.querySelector('#workers p');

      restaurantInput.innerHTML = bestRestaurant;
      workersInput.innerHTML = bestWorkers;
   }
}