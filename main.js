const result = document.getElementById('result');

const submit = document.getElementById('submit')


const binery = function(e){
    e.preventDefault()
    
    const num = document.getElementById('number').value;
    
    if(num === '') {
        alert('Please input the Value')
    } else if (num < 0) {
        alert("Please Enter the Positive Number")
    } else {
        result.style.visibility='visible'
    }
    // Converting Binery Number
    bineryNumber = Number(num).toString(2)
    result.innerHTML = bineryNumber;
    
}


submit.addEventListener('click', binery)