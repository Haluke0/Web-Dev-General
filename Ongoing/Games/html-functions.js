const buy_or_sell = document.querySelectorAll('input[name="buy-or-sell"]')




isopen = false;

function onLoad(){
    buy_or_sell.forEach(radio => radio.addEventListener("click", (e) =>{
        if(e.target.value === "true"){
            document.getElementById("buy-radio").style.display = "flex"
            document.getElementById("sell-radio").style.display = "none"
        }else{
            document.getElementById("buy-radio").style.display = "none"
            document.getElementById("sell-radio").style.display = "flex"
        }
    }))
}
function openUpgrades(){
    const upgradeShop = document.getElementById("upgrades-shop");
    const upgradeTitle = document.querySelector("#pos-txt")
    if (isopen){
        upgradeShop.style.bottom = "-18em"
        upgradeTitle.innerHTML ="&#8896;"
        isopen = false;
    }else{
        upgradeShop.style.bottom = "0"
        upgradeTitle.innerHTML ="&#8897;"
        isopen = true;
    }
}
