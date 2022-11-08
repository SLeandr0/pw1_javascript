function encontraMultiplo(lm, mt, mx){
    let multiplo=0
    let m = 0
    let c = 0
    while(m < lm){
        multiplo = Math.floor(Math.random() * mx)
        if(multiplo % mt == 0){
            m++
            console.log(multiplo+" é multiplo de "+mt)
        }
        c++
    }
    console.log(c+" tentivas para encontrar "+lm+" multiplos de "+mt+" em uma faixa de "+mx)
}

encontraMultiplo(5, 35, 100)