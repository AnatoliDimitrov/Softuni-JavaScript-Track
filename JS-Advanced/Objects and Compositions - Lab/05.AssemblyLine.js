function createAssemblyLine() {

    return {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function (){
                if (obj.temp < obj.tempSettings) {
                    obj.temp++;
                } else if (obj.temp > obj.tempSettings) {
                    obj.temp--;
                }
            }
        },
        hasAudio(obj) {
            obj.currentTrack = {};

            obj.nowPlaying = function (){
                if (obj.currentTrack !== null) {
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
                }
            };
        },

        hasParktronic(obj) {
            obj.checkDistance = function(dist){
                if (dist < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (dist < 0.25) {
                    console.log('Beep! Beep!');
                } else if (dist < 0.50) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);


assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

console.log(myCar);


