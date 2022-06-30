const key_1 = [..."JTREKYAVOGDXPSNCUIZLFBMWHQ"];

const key_2 = [..."YTNSHKVEFXRBAUQZCLWDMIPGJO"];

const key_3 = [..."VCHPRZGJNTLSKFBDQWAXEUYMOI"];

const alphabet =[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

const ciphertext = (name,key)=>{
   const array = [...name]
   for(let i = 0; i<name.length; i++){
       array[i] = key[i]
   }
   return array.join("")
}

console.log(ciphertext("emad",key_1))