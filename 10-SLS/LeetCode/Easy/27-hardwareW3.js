const vote = ["emad","ali","emad","emad","ali","reza"]

const numberVote = (num)=>{
    const obj = {emad : 0 , ali : 0 , reza : 0}
    num.map((item,index)=>{
       console.log( Object.keys(obj)[item])
    })
}

console.log(numberVote(vote))
console.log("==")
