console.log('test');


document.querySelector('#inputText').addEventListener('input', (event) => {
    console.log(event.target.value);
})