// ------------ second way to onclick handle from another file ----------
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//------------------- third way to onclick handle from another file -----------------
const blueButton = document.getElementById('make-blue-button');
// just set the name of the function.
blueButton.onclick = makeBlue;


function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//------------------- fourth way to onclick handle from another file -----------------

const greenButton = document.getElementById('make-green-button');

// here function name is optional.
// without function name, it is anonymous functions
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}


//------------------- fifth way to onclick handle from another file -----------------
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}


//------------------- sixth way to onclick handle from another file -----------------
const hotPinkButton = document.getElementById('make-hotpink');
// here function name is optional.
// without function name, it is anonymous functions
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})


// --------------- direct shortchut ------------------------- 
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})