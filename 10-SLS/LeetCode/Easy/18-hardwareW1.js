const Cash = (price)=>{
    let total = price;
    const obj = {
        quarters : { value : 25, number : 0},
        dimes : { value : 10, number : 0},
        nickels : { value : 5, number : 0},
        pennies : { value : 1, number : 0}
    }
    obj.quarters.number = Math.floor(total / obj.quarters.value)
    total = total - obj.quarters.value * obj.quarters.number
    obj.dimes.number = Math.floor(total / obj.dimes.value)
    total = total - obj.dimes.value * obj.dimes.number
    obj.nickels.number = Math.floor(total / obj.nickels.value)
    total = total - obj.nickels.value * obj.nickels.number
    obj.pennies.number = Math.floor(total / obj.pennies.value)
    total = total - obj.pennies.value * obj.pennies.number
    return "quarters " + obj.quarters.number + " dimes " + obj.dimes.number + " nickels " + obj.nickels.number + " pennies " + obj.pennies.number
}
console.log(Cash(49))
console.log(Cash(143))
