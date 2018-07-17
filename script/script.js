console.log('test');


document.querySelector('#inputText').addEventListener('click', (event) => {
    console.log(event.target.value);
})