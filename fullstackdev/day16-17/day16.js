function dosomething(val) {
    var k = val;
    console.log('hi')
    if (val > 3) {
        console.log('nice')
    }
    else if (val > 0) {
        console.log('awesome')
    }
    else {
        console.log('bakwas')
    }



    while (val > 20) {
        console.log('go')
        val -= 5
    }

    for (var i = 1; i < 11; i++) {
        console.log(i * k)
    }

    var m=['hi','bye','go']
        for(i in m){
            console.log(i)
        }
    
    var n={price:30,qty:3}
        for(i in n){
            console.log(i)
        }

    console.log(5=='5')         //true bcz js with compare data not datatype
    console.log(5!='5')            //false
    console.log(5==='5')        //it will comapre int with string means here datatype matching take place
    console.log(5!=='5')

    document.write('hii from kartikey')
}

