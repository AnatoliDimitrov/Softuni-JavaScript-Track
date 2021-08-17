function solve(inputEmployees, criteria) {
    let employees = JSON.parse(inputEmployees)
    let [prop, value] = criteria.split('-').filter(x => x);
    let counter = 0;
    let result = employees.reduce((a, x) => {
        if (x[prop] === value) {
            a.push(`${counter++}. ${x['first_name']} ${x['last_name']} - ${x['email']}`)
        }
        return a;
    }, [])
        .join('\n');
    return result;
}

console.log(solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
));