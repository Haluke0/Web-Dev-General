function roundByN(input, digits){
    return Math.round(input * Math.pow(10 , digits))/ Math.pow(10 , digits);
}
function calcAdditiveAndMultiplicative(base,addi,multp){
    return (base * (1 + addi / 100) * roundByN(multp , 2))
}
function exponentialIntegration(a,b,base){
    function integrate(x){
        return Math.pow(base,x) / Math.log(base);
    }
    return (integrate(b)- integrate(a))
}
