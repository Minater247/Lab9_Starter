let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish

function functionConstructorTest() {
    let func = function() {
        this.someValue = 1;
    }
    new func();
}

function functionConstructorTest2() {
    let func = () => {
        this.someValue = 2;
    };
    new func();
}

let consoleLog = document.querySelector('#error-btns > button:nth-child(1)');
consoleLog.addEventListener('click', () => {
    console.log('if log is logarithm, why doesn\'t console.log(10) return 1?');
});

let consoleError = document.querySelector('#error-btns > button:nth-child(2)');
consoleError.addEventListener('click', () => {
    console.error('there is an error with your statement. log is logarithm in mathematics, not necessarily in programming.');
});

let consoleCount = document.querySelector('#error-btns > button:nth-child(3)');
consoleCount.addEventListener('click', () => {
    console.count('this breaks the storyline but I don\'t want to reorder the buttons so ignore this in the story. you pressed the button this many times: ');
});

let consoleWarn = document.querySelector('#error-btns > button:nth-child(4)');
consoleWarn.addEventListener('click', () => {
    console.warn('warning, lots of information. So log for console.log doesn\'t come from logarithm, it comes all the way back from nautical navigation, where a literal log was let out with knots on a rope (a whole other story for where knots came from as a speed measurement) to measure the speed of a ship. They created a book to record the measurements of the log, and they called it the log book. That trickled down through the ages to mean anything related to recording information, and as computers came about, they used it to mean recording information in the running of a program. And now we have console.log, unrelated to logarithm. Etymology :)');
});

let consoleAssert = document.querySelector('#error-btns > button:nth-child(5)');
consoleAssert.addEventListener('click', () => {
    console.assert(confirm("deny this box to error"), 'You denied the box, so the assert failed and printed this. If you accepted it, this didn\'t print because confirm was not falsy.');
});

let consoleClear = document.querySelector('#error-btns > button:nth-child(6)');
consoleClear.addEventListener('click', () => {
    console.clear();
    alert('The console should be empty');
});

let consoleDir = document.querySelector('#error-btns > button:nth-child(7)');
consoleDir.addEventListener('click', () => {
    console.dir(document.querySelector('form'));
});

let consoleDirXML = document.querySelector('#error-btns > button:nth-child(8)');
consoleDirXML.addEventListener('click', () => {
    console.dirxml(document.querySelector('form'));
});

let consoleGroupStart = document.querySelector('#error-btns > button:nth-child(9)');
consoleGroupStart.addEventListener('click', () => {
    console.group('This is a group');
    console.log('This is inside the group');
});

let consoleGroupEnd = document.querySelector('#error-btns > button:nth-child(10)');
consoleGroupEnd.addEventListener('click', () => {
    console.groupEnd();
    console.log('This is outside the group');
});

let consoleTable = document.querySelector('#error-btns > button:nth-child(11)');
consoleTable.addEventListener('click', () => {
    let data = [
        { name: 'Sonic', born: '1991', creator: 'Sega' },
        { name: 'Mario', born: '1981', creator: 'Nintendo' },
        { name: 'Link', born: '1986', creator: 'Nintendo' },
        { name: 'Bomberman', born: '1983', creator: 'Hudson Soft' },
        { name: 'Pac-Man', born: '1980', creator: 'Namco' },
    ];
    console.table(data);
});

let consoleStartTimer = document.querySelector('#error-btns > button:nth-child(12)');
consoleStartTimer.addEventListener('click', () => {
    console.time('timer');
    console.log('Timer goes brrrrrr');
});

let consoleEndTimer = document.querySelector('#error-btns > button:nth-child(13)');
consoleEndTimer.addEventListener('click', () => {
    console.timeEnd('timer');
    console.log('Timer no longer goes brrrrrr');
});

let consoleTrace = document.querySelector('#error-btns > button:nth-child(14)');
consoleTrace.addEventListener('click', () => {
    console.trace('Enter the matrix, unwind the code, and find the source of the instability');
});


try {
    functionConstructorTest();
    functionConstructorTest2();
    console.log('Function constructor tests passed');
} catch (e) {
    console.error('Function constructor tests failed:', e);
} finally {
    console.log('Function constructor tests completed');
}

try {
    console.log('Function call so the try block of the finially statement isn\'t empty');
} catch (e) {
    console.log('If you\'re seeing this, you\'re either looking at the code or something went very, very wrong with the browser');
} finally {
    console.log('This `finally` should run');
}


// Was listening to a Teto song so now we have a TetoError
class TetoError extends Error {
    constructor(message) {
        super(message + "\nhttps://www.youtube.com/watch?v=F38EuG2dAyM");
        this.code = 'TETO_ERROR';
        this.status = 418; // Because both originated from April Fools jokes
        this.name = 'TetoError';
    }
}
function throwTetoError() {
    throw new TetoError('You called the TetoError function, so here is a TetoError');
}

try {
    throwTetoError();
} catch (e) {
    if (e instanceof TetoError) {
        console.error('Caught a TetoError:', e.message);
    } else {
        console.error('What? An error that isn\'t a TetoError? How dare you!');
    }
}


let triggerGlobalErrorButton = document.querySelector('#error-btns > button:nth-child(15)');
triggerGlobalErrorButton.addEventListener('click', () => {
    throw new TetoError('You clicked the global error button. This can throw anything, so I used the TetoError because why not.');
});


window.onerror = function(message, source, lineno, colno, error) {
    if (error instanceof TetoError) {
        console.error('Global error caught:', error.message);
        return true;
    }
    return false;
}