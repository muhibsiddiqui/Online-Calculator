let runningtotal = 0;
let buffer = "0";
let previousoperator;

const screen = document.querySelector('.screen');


function buttonclick(value) {
    if (isNaN(value)) {
        hsymbol(value);
    }
    else {
        hnumber(value);

    }
    screen.innertext = buffer;
}

function hsymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningtotal = 0;
            break;

        case '=':

            if (previousoperator === null) {
                return
            }
            foperate(pint(buffer));
            previousoperator = null;
            buffer = runningtotal;
            runningtotal = 0;
            break;

        case '←':
            if (buffer.length === 1) {
                buffer = '0';

            }
            else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':

        case '-':

        case ' × ':

        case '÷':
            hmath(symbol);
            break;
    }
}

function hmath(symbol) {
    if (buffer === "0") { return; }

    const intbuffer = pint(buffer);
    if (runningtotal === 0) {
        runningtotal = intbuffer;

    }
    else {
        foperate(intbuffer);

    }
    previousoperator = symbol;
    buffer = '0';
}

function foperate(intbuffer) {
    if (previousoperator === '+') {
        runningtotal += intbuffer;

    }
    else if (previousoperator === '-') {
        runningtotal -= intbuffer;

    }
    else if (previousoperator === '×') {
        runningtotal *= intbuffer;

    }
    else if (previousoperator === '÷') {
        runningtotal /= intbuffer;

    }
}

function hnumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;

    }
    else { buffer += numberString; }
}

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function (event) {
        buttonclick(event.target.innertext);
    })

}

// init();