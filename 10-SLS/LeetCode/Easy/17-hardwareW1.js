const checkCreditCards = (n)=>{
    const array = [...n.toString()]
    let totalEven = 0;
    let totalOdd = 0;
    if(array.length <= 15) return "inValid"
    for(let i=0; i<array.length;i++){
        if(i % 2 == 0){
          if( +array[i]* 2> 10){
            totalEven = totalEven +  parseInt(array[i])*2 - 9
          }
          totalEven = totalEven +  parseInt(array[i])
        }
        if(i % 2 !== 0){
          totalOdd += +array[i]
        }
    }
    return (totalEven - 1 + totalOdd) % 10 == 0 ? "valid" : "inValid"
 }
 
 console.log(checkCreditCards(400))
 console.log(checkCreditCards(6176292929))
 console.log(checkCreditCards(4003600000000014))
 