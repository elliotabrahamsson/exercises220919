function exerciseA() {
    var textboxvalue = document.getElementById('txt').value;
    let start = 0;

    function prime(siffror, start) {
        while (start <= Math.sqrt(siffror)) {
            if (siffror % start++ < 1) {
                return false;
            }
        }
        return siffror > 1;
    }
   

    /*for (let i = 0; i < siffror.length; i++) {
        const bignumber = (element) => element > textboxvalue;
        //console.log(siffror.find(bignumber));
        console.log(`${siffror.find[i]}`);
        
    }*/
    console.log([2, 3, 5, 7, 11, 13].findIndex(prime));    
}