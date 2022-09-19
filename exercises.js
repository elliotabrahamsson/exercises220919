console.log('I am alive!');

function exerciseA() {
    var textboxvalue = document.getElementById('txt').value;
    let siffror = textboxvalue.split (' ');



    for(let number = siffror ; number<=siffror; number++){
        let isPrime = true;
    
    for (let i=siffror; i<= number-1;i++){
        if(number%i===0){
            isPrime = false;
            break
        }
    }
    if (isPrime) console.log(number);
    }
    
}