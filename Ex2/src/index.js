function calculaA(b, c, d){
    return((b*c)/d);
}
function calculaB(a, c, d){
    return((a*d)/c);
}
function calculaC(b, a, d){
    return((a*d)/b);
}
function calculaD(b, c, a){
    return((b*c)/a);
}

function calculaPitagoras(h, ca, co) {
    if (h == 0) {
        return calculaH(ca, co);
    }
    else if (ca == 0) {
        return calculaCa(h, co);
    }
    else {
        return calculaCo(h, ca);
    }
}

function calculaH(ca, co) {
    return (Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2)));
}
function calculaCa(co, h) {
    return (Math.sqrt(Math.pow(co, 2) - Math.pow(h, 2)));
}
function calculaCo(ca, h) {
    return (Math.sqrt(Math.pow(ca, 2) - Math.pow(h, 2)));
}

function calculadora(n1, n2, op){
    if(op == "+"){
        return (n1 + n2);
    }
    if(op == "-"){
        return (n1 - n2);
    }
    if(op == "*"){
        return (n1 * n2);
    }
    if(op == "/"){
        return (n1 / n2);
    }
    if(op=="raiz")
    {
        return Math.sqrt(n1 + n2);
    }
    if(op=="potencia")
    {
        return Math.pow(n1 + n2);
    }
}

function calculaAvancado(opcao, p1, p2, p3, p4) {
    switch (opcao) {
        case "pitagoras":
            return calculaPitagoras(p1, p2, p3);
            break;
        case "regra":
            return calculaRegra(p1, p2, p3, p4);
            break;
        case "calculadora":
            return calculadora(p1, p2, p3);
            break;
        default:
            return "Inesistente";
    }
}

console.log(calculaAvancado("calculadora", 10, 5, "+", null));