function isoverflown(element) {
    return element.scrollWidth > element.offsetWidth;
}

function fitText(selector){
    let element = document.querySelector(selector);

    element.style.fontSize = "50px";
    let fontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
    while (isoverflown(element)){
        element.style.fontSize = --fontSize + 'px';
    }
}

document.querySelector('input[type="range"').addEventListener('change', (event) => {
    let outputElement = document.querySelector('.output-text'),
        rangeInput = document.querySelector('.range-input');
    rangeInput.innerHTML = outputElement.style = "width:" + event.target.value + "%";
    fitText('.output-text');
})

document.querySelector('#inputText').addEventListener('input', (event) => {
    let outputElement = document.querySelector('.output-text');
    outputElement.innerHTML = event.target.value;
    fitText('.output-text');
})

document.onreadystatechange = () => {
    let rangeInput = document.querySelector('input[type="range"]'),
        rangeInputLabel = document.querySelector('.range-input');

        rangeInputLabel.innerHTML = "width:" + rangeInput.value + "%";
}