function solve(steps, footprint, speed) {
    let distance = (steps * footprint) / 1000;
    time = (distance / speed) * 60;

    let seconds = (time + Math.trunc((distance * 1000) / 500)) * 60;
    
    toHHMMSS(seconds);

    function toHHMMSS(seconds) { 
         let hours   = Math.floor(seconds / 3600);
         let minutes = Math.floor((seconds - (hours * 3600)) / 60);
         seconds = seconds - (hours * 3600) - (minutes * 60);
     
         if (hours   < 10) {hours   = "0"+hours;}
         if (minutes < 10) {minutes = "0"+minutes;}
         if (seconds < 10) {seconds = "0"+seconds;}
         var time    = hours+':'+minutes+':'+Math.round(seconds);
         console.log(time);
    }
}

solve(2564, 0.70, 5.5);