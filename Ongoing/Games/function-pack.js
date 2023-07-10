isopen = false;
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
function openUpgrades(){
    const upgradeShop = document.getElementById("upgrades-shop");
    if (isopen){
        upgradeShop.style.bottom = "-18em"
        isopen = false;
    }else{
        upgradeShop.style.bottom = "0"
        isopen = true;
    }
    
    
}