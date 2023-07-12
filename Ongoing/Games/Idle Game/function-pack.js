    function roundByN(input, digits){
    return Math.round(input * Math.pow(10 , digits))/ Math.pow(10 , digits);
}
function calcAdditiveAndMultiplicative(base,addi,multp){
    return (base * (1 + addi / 100) * roundByN(multp , 2))
}
function calcMassCost(currentNumber,amount,initialCostbase,increment){
    output = 0
    prev_cost = 0
    for (i = currentNumber;i < currentNumber + amount;i++){
        output += Math.round(initialCostbase * Math.pow(increment,i));
    }
    return output;
}
