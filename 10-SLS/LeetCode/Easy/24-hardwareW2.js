// coleman - Liau Index ::::::::::::::::::::::::::::::::::

// index = 0.0588 * L - 0.296 * S - 15.8 ;

// L  ::  is average number of letter per 100 words . 

// S  ::  is average number of sentences per 100 words .

// Letter ?  //  Words ?  //  sentence ?  

const Readability =(text)=>{
    let countLetter = 0
    let counterWord = 1
    let countsentence = 0
    for(let i=0; i<text.length; i++){
       (text[i] !== " " && text[i] !== "!" && text[i] !== "." && text[i] !== "?" && text[i] !== "'") &&   countLetter++ 
       text[i] == " " &&  counterWord++;
       (text[i] == "!" || text[i] == "."|| text[i] == "?") && countsentence++
    }
    const answer = Math.round(0.0588 * 100 * (countLetter / counterWord) - 0.296 * 100 * (countsentence / counterWord) - 15.8)
 
    if (answer < 1) { return("Grade < 1"); }
    else if (answer > 16) {  return("Grade 16+"); }
    else {  return "Grade " + answer }
 }
 
 console.log(Readability("Congratulations! Today is your day. You're off to Great Places! You're off and away!"));
 
 console.log(Readability("As years went by, there"));
 