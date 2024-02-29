const form = document.getElementById('form');
const result = document.getElementById('result');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const userNumber = document.getElementById('userNumber').value;
    if(!parseInt(userNumber)){
        result.innerHTML ='please enter a valid number';


    }
    else{
        result.innerHTML="";
        for (let i = 1; i <= 10; i++){
            result.innerHTML += userNumber + 'x' + i + '='+ (userNumber*i)+'<br>';
        }
    }
});