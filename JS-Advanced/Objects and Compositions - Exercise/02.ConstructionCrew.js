function solve(worker) {

    if (worker.dizziness) {
        drinkWater(worker);
    }
    
    function drinkWater(worker){
    worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
    worker.dizziness = false;
    }
    

    return worker;
}

console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));