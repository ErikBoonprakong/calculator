let display = document.getElementById('display')
let numOne = 0;
let numTwo = 0;
let operand = null;
let displayNum = 0
let buttons = Array.from(document.getElementsByClassName('button'))
let nextNum = ''

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
                numTwo = parseInt(nextNum)
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
    numOne = parseInt(numOne);
    numTwo = parseInt(numTwo);
    switch(operand){
        case '+':
            numOne = numOne + numTwo;
            display.innerText = numOne;
            return numOne;
        case '-':
            numOne = numOne - numTwo;
            display.innerText = numOne;
            return numOne;
        case '*':
            numOne = numOne * numTwo;
            display.innerText = numOne;
            return numOne;
        case '/':
            numOne = numOne / numTwo;
            display.innerText = numOne;
            return numOne;
    }
}

function test(){
    console.log("numOne: " + numOne + '\n' + "numTwo: " + numTwo)
    //console.log(parseInt(display.innerText[1]))
    //console.log(nextNum)
}

