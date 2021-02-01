function startGame() {
    document.querySelector(".game").innerHTML=""
    let pump = [];
    for (let i = 0; i < 5; i++) {
        pump.push(Math.floor(Math.random() * (100)));
    }
    let carPetrol = 30;
    let petrolPump = pump.sort(function(a, b) {
        return a - b;
    });
    // console.log(petrolPump)

    let step
    let totalSteps = 0;
    let i = 1;
    while (totalSteps <= 100) {
        step = Math.floor(Math.random() * 6)
        totalSteps += step;
        if (totalSteps >= petrolPump[0]) {
            carPetrol += 20
            petrolPump[0] = totalSteps + 100
        }
        else if (totalSteps >= petrolPump[1]) {
            carPetrol += 20
            petrolPump[1] = totalSteps + 100
        }
        else if (totalSteps >= petrolPump[2]) {
            carPetrol += 20
            petrolPump[2] = totalSteps + 100
        }
        else if (totalSteps >= petrolPump[3]) {
            carPetrol += 20
            petrolPump[3] = totalSteps + 100
        }
        else if (totalSteps >= petrolPump[4]) {
            carPetrol += 20
            petrolPump[4] = totalSteps + 100
        }
        carPetrol -= step;
        // console.log({"index":i,"Car-Petrol":carPetrol,"step":step,"total":totalSteps})
        document.querySelector(".game").innerHTML+=`<div><p>Move ${i} - Car at ${totalSteps}, Petrol Remaining ${carPetrol}</p></div>`;
        i++
    }
}

function resetGame(){
    document.querySelector(".game").innerHTML=""
}
// console.log(petrolPump)
