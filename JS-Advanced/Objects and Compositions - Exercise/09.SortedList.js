function createSortedList(){

    let result = {};

    let numbers = [];

    result.add = function(element){
        numbers.push(element);
        sort();
        result.size++;
    }

    result.remove = function(index){

        if (index >= 0 && index < numbers.length) {
            numbers.splice(index, 1); 
            sort();
            result.size--;
        }
    }

    result.get = function(index){
        if (index >= 0 && index < numbers.length) {
            return numbers[index];
        }
    }

    result.size = 0;

    function sort(){
        numbers.sort((a, b) => a - b);
    }

    return result;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);

