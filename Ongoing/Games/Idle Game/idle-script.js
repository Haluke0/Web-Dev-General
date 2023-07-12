




class idle_item {
    constructor(name, cost, number, base_sps, buff_addi, buff_multp, increment){
        this.name = name
        this.cost = cost
        this.number = number
        this.base_sps = base_sps
        this.buff_addi = buff_addi
        this.buff_multp = buff_multp
        this.increment = increment
    }
    buy(amount){
        if (canBuy(amount)){
            current_souls -= this.calculateCost(amount)
            this.number += amount;
        }
    }
    sell(amount){
        this.number -= amount;
    }
    activeSps(){
        return calcAdditiveAndMultiplicative(this.base_sps, this.buff_addi, this.buff_multp)
    }
    calculateCost(amount){
        if (amount === 1){
            return Math.round(this.cost * Math.pow(this.increment, this.number))
        }else{
            return Math.round(cost * calcMassCost(this.number + 1, this.number + amount, this.increment))
        }
    }

    canBuy(amount){
        if (current_souls >= this.calculateCost(amount)){
            return true
        }else {return false}
        
    }
}

var current_souls = 0;

var souls_per_second = 0;
var unbuffed_souls_per_second = 0;

var additive_increase_index = 0; //when changing this, add the new value (this is a percentage of addition)
var multiplicative_increase_index = 1; //when changing this, multiply the new value (this is a direct multiplier)

setInterval(function(){
    souls_per_second = calcAdditiveAndMultiplicative(unbuffed_souls_per_second, additive_increase_index, multiplicative_increase_index)
    current_souls += souls_per_second / 10;
},100)

