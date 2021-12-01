let display = document.getElementById('display')
let numOne = 0;
let numTwo = 0;
let operator = null;
let buttons = Array.from(document.getElementsByClassName('button'))
let nextNum = ''

buttons.map (function mapNumTwo(button) {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                nextNum = '';
                break;
            case 'Del.':
                if (display.innerText[0] == '+' ||
                    display.innerText[0] == '-' ||
                    display.innerText[0] == '*' ||
                    display.innerText[0] == '/'){
                        nextNum = display.innerText.slice(0, -1);
                    }
                        else{
                            numOne = display.innerText.slice(0, -1)
                        }
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                if (parseFloat(nextNum) != NaN){
                    numTwo = parseFloat(nextNum)}
                    else{
                        display.innerText = numOne;
                    }
                //numTwo = parseFloat(nextNum)
                nextNum = '';
                console.log("numOne: " + numOne + '\n' + operator + "\n" + "numTwo: " + numTwo)
                numOne = operate(numOne, numTwo, operator);
                break;
            case '+':
                nextNum = '';
                display.innerText = '+';
                break;
            case '-':
                nextNum = '';
                display.innerText = '-';
                break;
            case '*':
                nextNum = '';
                display.innerText = '*';
                break;
            case '/':
                nextNum = '';
                display.innerText = '/';
                break;
            case '.':
                if (!display.innerText.includes('.')){
                    display.innerText += e.target.innerText;
                };
                break;
            default:
                if (display.innerText.length <= 8){
                    display.innerText += e.target.innerText;
                    if (display.innerText[0] == '+' ||
                        display.innerText[0] == '-' ||
                        display.innerText[0] == '*' ||
                        display.innerText[0] == '/'){
                        nextNum += e.target.innerText.toString()
                        operator = display.innerText[0]
                    }
                        else{
                            numOne = display.innerText
                        }
                }
        }
    })
})

function operate(numOne, numTwo, operator){
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);
    if (numTwo === NaN){
        display.innerText = Number(numOne.toPrecision(8));
        return numOne;
    }
    switch(operator){
        case '+':
            numOne = numOne + numTwo;
            numTwo = 0;
            display.innerText = Number(numOne.toPrecision(8));
            return numOne;
        case '-':
            numOne = numOne - numTwo;
            numTwo = 0;
            display.innerText = Number(numOne.toPrecision(8));
            return numOne;
        case '*':
            numOne = numOne * numTwo;
            numTwo = 0;
            display.innerText = Number(numOne.toPrecision(8));
            return numOne;
        case '/':
            if (numTwo == 0){
                display.innerText = "Nope!"
            }
                else{
                    numOne = numOne / numTwo;
                    numTwo = 0;
                    display.innerText = Number(numOne.toPrecision(8));
                }
            return numOne;
        case null:
            display.innerText = Number(numOne.toPrecision(8));
            return numOne;
    }
}

function test(){
    //console.log(display.innerText.includes('.'))
    //console.log("numOne: " + numOne + '\n' + "numTwo: " + numTwo)
    //console.log(parseInt(display.innerText[1]))
    //console.log(nextNum)
}

