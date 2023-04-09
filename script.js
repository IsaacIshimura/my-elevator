let house = document.querySelector('.house');

let timeOut = false;
let timeOutForNumber = false;

const moving = function(floor){
    let step = 102;
    let count = 0;
    for (let i = 2; i <= floor; i+=1){
        count += step
    }
    return String(count) + 'px';
}


let floorNumbers = document.getElementsByClassName('floor-num');
let currentFloorDesk = document.querySelector('[data-mark]');

function changingFloorNumber (event){
    if (timeOutForNumber === true){
        return null
    }
    timeOutForNumber = true;
    setTimeout (function(){timeOutForNumber = false
    }, 1000)
   if (event.target.dataset.floor == event.target.id){
    for (elem of floorNumbers){
        if(elem.dataset.floor == event.target.id){
            elem.setAttribute('data-mark', '*')
        }
        else{
            elem.removeAttribute ('data-mark')
        }
    }
   }
}




function goingLift (event){
    if (timeOut === true){
        return null
    }
    event.preventDefault();
    timeOut = true;
    setTimeout (function(){timeOut = false
    }, 1000)
        let lift = document.getElementById('lift');
         
        lift.style.bottom = moving(Number(event.target.id));
        
        
    }


house.addEventListener('click', goingLift)
house.addEventListener('click', changingFloorNumber)





let outNumber = document.getElementById('submit')

function generatingHouse (event) {
    event.preventDefault();

    let numberOf = document.getElementById('quantity')
    let numberFloor = Number(numberOf.value);
    
    if (numberFloor > 6){
        alert('Цемент ещё не подвезли! Выбери значение от 4 до 6!')
        return
    }

    
    for (let i = 4; i <= numberFloor; i += 1){
        
        const bigHouse = document.querySelector('.house');
        const newFloor = document.createElement('div');
        newFloor.setAttribute('class', 'floor');
        
        const newRoom = document.createElement('div');
        newRoom.setAttribute('class', 'room part-of-floor floor-num');
        newRoom.setAttribute('data-floor', `${i}`)
        newRoom.addEventListener('click', changingFloorNumber)
        
        const newLiftShaft = document.createElement('div');
        newLiftShaft.setAttribute('class', 'lift-shaft part-of-floor');

        const newDoor = document.createElement('div');
        newDoor.setAttribute('class', 'door part-of-floor');
        
        const newButton = document.createElement('button');
        newButton.setAttribute('class', 'js-buttons floor-num');
        newButton.setAttribute('type', 'button');
        newButton.setAttribute('value', `${i}`);
        newButton.setAttribute('id', `${i}`);
        newButton.setAttribute('data-floor', `${i}`)
        newButton.addEventListener('click', changingFloorNumber)

        
        newDoor.append(newButton);
        newFloor.append(newRoom, newLiftShaft, newDoor);
        bigHouse.append(newFloor);
        


    }
    lift.style.bottom = '0px';
    if(lift.style.bottom == '0px'){
        let Numbers = document.getElementsByClassName('floor-num')
        for (elem of Numbers){
            if(elem.dataset.floor == '1'){
                elem.setAttribute('data-mark', '*')
            }
            else {
                elem.removeAttribute('data-mark')
            }
        }
    }

}



outNumber.addEventListener('click', generatingHouse)


  
  









