function isoverflown(element) {
    return element.scrollWidth > element.offsetWidth;
}

function fitText(selector){
    let element = document.querySelector(selector);
    
    if(isoverflown(element)) {
        console.log('resizing');
        let fontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
        console.log('font-size-', fontSize-- + 'px');
        element.style.fontSize = --fontSize + 'px';
        fitText(selector);
    } else {
        // element.style.fontSize = "50px";
        // fitText(selector)
    }
}

document.querySelector('input[type="range"').addEventListener('change', (event) => {

    console.log('range change', event.target.value);
    let outputElement = document.querySelector('.output-text'),
        rangeInput = document.querySelector('.range-input');
    rangeInput.innerHTML = outputElement.style = "width:" + event.target.value + "%";
    fitText('.output-text');

})

document.querySelector('#inputText').addEventListener('input', (event) => {
    console.log(event.target.value);
    let outputElement = document.querySelector('.output-text');
    outputElement.innerHTML = event.target.value;
    fitText('.output-text');
})