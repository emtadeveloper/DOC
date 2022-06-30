const key_1 = [..."JTREKYAVOGDXPSNCUIZLFBMWHQ"];

const key_2 = [..."YTNSHKVEFXRBAUQZCLWDMIPGJO"];

const key_3 = [..."VCHPRZGJNTLSKFBDQWAXEUYMOI"];

const alphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const ciphertext = (name,key)=>{
   const array =[...name.toUpperCase()]
   for(let i = 0; i<name.length; i++){
      let index = alphabet.indexOf(array[i]) + key > 26 ? alphabet.indexOf(array[i]) + key - 26 : alphabet.indexOf(array[i]) + key
      if( array[i] !== " " || array[i] == ","){
          array[i] = alphabet[index]
      }
   }
   return array.join("")
}

console.log(ciphertext("hello, world",13))


