console.log('I am alive!');

function exerciseA() {
    var textboxvalue = document.getElementById('txt').value;
    const siffror = textboxvalue.split (' ');

    for (let i = 0; i < siffror.length; i++) {
        if (siffror[i] ===theValue) {
            break;
        }
        console.log(siffror);
    } 
    
}