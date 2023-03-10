// Functions:
//  1. add()
//  2. sub()
//  3. multiply()
//  4. divide()
//  5. roundNumber() -> returns Math.round()
//
// Event Listeners:
//  1. When "Clear" is Clicked
//  2. When a "numberButton" is Clicked
//  3. When an operandButton is Clicked
//  4. When equalButton is Clicked
//  5. 
//
//
//

let calculator = document.querySelector('.calculator');
let numberButtons = calculator.querySelectorAll('.numberButtons');
let allButtons = calculator.querySelectorAll('#btn');
let equalButton = document.querySelector('.equalButton');
let operandsButtons = document.querySelectorAll('.operandsButtons')
let clear = document.querySelector('.clear')
let del = document.querySelector('.delete')
let previousScreen = document.querySelector('.previous')
let currentScreen = document.querySelector('.current')


let current = ''
let previous = ''
let operator = ''

    

clear.addEventListener('click' , ()  =>{
 currentScreen.textContent = '' 
 previousScreen.textContent = ''
})

function add(a , b) {
    a+=b
    return currentScreen.textContent = roundNumber(a),
    previousScreen.textContent = ''

}

function sub(a , b) {
    a-=b
    return currentScreen.textContent = roundNumber(a),
    previousScreen.textContent = ''
}

function multiply(a , b) {
    a*=b
    return currentScreen.textContent = roundNumber(a),
    previousScreen.textContent = ''
}

function divide(a , b) {
    a/=b
    return currentScreen.textContent = roundNumber(a),
    previousScreen.textContent = ''
}



numberButtons.forEach(buttons => {

    buttons.addEventListener('click' , function (e) {
        if (currentScreen.textContent.length <= 8 ) {
            currentScreen.textContent += e.target.textContent 
        }
    })
})

operandsButtons.forEach(operands => {
    operands.addEventListener('click' , function(event) { 
        if(currentScreen.textContent != ''){
        currentScreen.textContent += event.target.textContent;
        previousScreen.textContent = currentScreen.textContent;
        currentScreen.textContent = '' ;
        }
        operator = event.target.textContent


    })
})


equalButton.addEventListener('click' , () => {

    if (previousScreen.textContent != '' && currentScreen.textContent != '') {
        
    

    if (operator == '+') {
        previousScreen.textContent = previousScreen.textContent.slice(0 , -1)
        current = currentScreen.textContent
        previous = previousScreen.textContent
        current = Number(current)
        previous = Number(previous)
        add(previous,current)
       
    }
    else if (operator == '???') {
        previousScreen.textContent = previousScreen.textContent.slice(0 , -1)
        current = currentScreen.textContent
        previous = previousScreen.textContent
        current = Number(current)
        previous = Number(previous)
        sub(previous,current)

    }
    else if (operator == '??') {
        previousScreen.textContent = previousScreen.textContent.slice(0 , -1)
        current = currentScreen.textContent
        previous = previousScreen.textContent
        current = Number(current)
        previous = Number(previous)
        multiply(previous,current)

    }
    else if (operator == '??') {
        previousScreen.textContent = previousScreen.textContent.slice(0 , -1)
        current = currentScreen.textContent
        previous = previousScreen.textContent
        current = Number(current)
        previous = Number(previous)
        divide(previous,current)

    }
}
})

    

function roundNumber(num) {
    return Math.round(num * 1000) / 1000 ;
}