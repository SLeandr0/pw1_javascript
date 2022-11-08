var frutas = new Array('laranja', 'manga', 'abacaxi', 'uva', 'melancia');

function abasteceVetorOrganizado(fruta){
    frutas.push(fruta)
    frutas.sort()
    console.log(frutas.join(' | '))
}

console.log(abasteceVetorOrganizado('kiwi'))