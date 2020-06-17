console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#message-1')
const msg2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    msg1.innerHTML = ''
    msg2.innerHTML = ''
    console.log(search.value);
    const url = 'http://localhost:3000/weather?address='+search.value
    fetch(url).then((response) => {
    response.json().then( (data) => {

        if(data.error){
            console.log(data.error)
            msg1.innerHTML = JSON.stringify(data.error)
        }else{
            console.log(data)
            msg2.innerHTML = JSON.stringify(data)
        }
    })
})
})
