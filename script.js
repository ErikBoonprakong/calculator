let display = document.getElementById('display')
let numOne = 0;
let numTwo = 0;
let operand = null;
let buttons = Array.from(document.getElementsByClassName('button'))
let nextNum = ''
//edit

buttons.map (function mapNumTwo(button) {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CLEAR ALL':
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
                console.log("numOne: " + numOne + '\n' + operand + "\n" + "numTwo: " + numTwo)
                numOne = operate(numOne, numTwo, operand);
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
                display.innerText += e.target.innerText;
                if (display.innerText[0] == '+' ||
                    display.innerText[0] == '-' ||
                    display.innerText[0] == '*' ||
                    display.innerText[0] == '/'){
                    nextNum += e.target.innerText.toString()
                    operand = display.innerText[0]
                }
                    else{
                        numOne = display.innerText
                    }
        }
    })
})

function operate(numOne, numTwo, operand){
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);
    if (numTwo === NaN){
        display.innerText = numOne;
        return numOne;
    }
    switch(operand){
        case '+':
            numOne = numOne + numTwo;
            numTwo = 0;
            display.innerText = numOne;
            return numOne;
        case '-':
            numOne = numOne - numTwo;
            numTwo = 0;
            display.innerText = numOne;
            return numOne;
        case '*':
            numOne = numOne * numTwo;
            numTwo = 0;
            display.innerText = numOne;
            return numOne;
        case '/':
            if (numTwo == 0){
                display.innerText = "Nope!"
            }
                else{
                    numOne = numOne / numTwo;
                    numTwo = 0;
                    display.innerText = numOne;
                }
            return numOne;
        case null:
            display.innerText = numOne;
            return numOne;
    }
}

function test(){
    console.log(display.innerText.includes('.'))
    //console.log("numOne: " + numOne + '\n' + "numTwo: " + numTwo)
    //console.log(parseInt(display.innerText[1]))
    //console.log(nextNum)
}

