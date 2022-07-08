const vote = ["emad","ali","emad","emad","ali","reza"]

const numberVote = (num)=>{
    let obj = {emad : 0 , ali : 0 , reza : 0}
    num.map(element => {
          obj[element] = obj[element] + 1
    }); 
    for(key in obj){
        return  obj[key]  ===  Math.max(obj.ali,obj.emad,obj.reza) &&  key + " Win s Vote"
    }
}


console.log(numberVote(vote))
