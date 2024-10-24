function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function removeLastItem() {
    const display = document.getElementById('display');
    let s = display.value;
    let n = s.length;

    if(n > 1){
        display.value = s.slice(0, n-1);
    }
    else{
        clearDisplay();
    } 
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}