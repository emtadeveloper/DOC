/*

تمام انواع حلقه و فور رو باید یک سینتکس پشتیبانی میکنه 
و حتی بحث desDetucturing پشتیبانی میکنه

iterable :
for of ساختار داده ای هستش که امکان دسترسی متوالی به عناصر داخلیش رو بهمون میده و وقتی داخل حلقه
قرار اجرا میشه و تک تک عناصرش رو برامون بر میگردونه

یا تکرار شونده هستش که نشانگر است که  iterator  دارای یک ویژگی یا پراپرتی به اسم  iterable هر
داره که next یک متد یا ویژگی به نام  iterator بر روی عناصر حرکت میکنه تا اون توالی رو ایجاد کنه و هر 
این متد یک آبجکت بر میگردونه داخلش 
value : مقدار  ,  done : برمیگردونه boolean مقدار  

برای نوشتن یک اینتربل در کدهای شی امون که با استفاده از حلقه ها بتونیم بیایم و اون رو صدا بزنیم دو تا
راه داریم و باید حتما از سیمل ها برای خاصیت یکتایی شون استفاده بکنیم

const data = {
 items: ["A", "B", "C"],
 pointerIndex: 0,
 next() {
   if (this.pointerIndex < this.items.length) // if done
     return { value: this.items[this.pointerIndex++], done: false }
   else // if not done
     return { value: undefined, done: true };
 },
  [Symbol.iterator]: function() {
   this.pointerIndex = 0;
   return { next: this.next.bind(this) }
 }
}

for (let item of data) {
  console.log(item)
} //o: A B C

راه دوم این هستش که بیایم و از توابع جنریک استفاده بکنیم

const data = {
 items: ["A", "B", "C"],
 [Symbol.iterator]: function* myIterator() {
   this.pointerIndex = 0;
   while (this.pointerIndex < this.items.length)
     yield this.items[this.pointerIndex++];
 }
}

for (let item of data) {
  console.log(item)
} //o: A B C 

for .. of روی مطالب زیر میتونه بیاد و حلقه بزنه

1- Array iteration

   let scores = [ 80,90,70]
   for(let score of scores){
       score = score + 5
       console.log(score)
   }


--------------------------------------------------

2- In-place destructuring
    const ratings = [  
      {use:'John',score:3},
      {use:'Jane',score:4},
      {use:'David',score:5},
      {use:'Peter',score:2},
    ]
    let sum = 0;
    for(const {score} of ratings){
        sum+=score;
    }

--------------------------------------------------
3- Array-like objects iteration
--------------------------------------------------

4- Maps and Sets iteration
   
   let colors = new Map()
   colors.set('red','#ff0000')
   colors.set('green','#00ff00')
   colors.set('blue','#000ff')
   for( let color of colors){
       console.log(color)
   }

--------------------------------------------------

5- Iterate plain javaScript Objects

قبلا ما وقتی میخاستیم بیایم و در یک آبجکت حلقه بزنیم از
شیوه زیر استفاده میکنیم

const person = {
    name : 'john Smith',
    job: 'agent'
}

// قبل از for of
Object.keys(person).forEach(prop=>{
    cosnole.log(prop,person[prop])
})
// 'name','john Smith'
// 'job','agent'

// بعد از for of
for(const[prop,value] of object.entries(person)){
    console.log(prop,value)
}
// 'name','john Smith'
// 'job','agent'

--------------------------------------------------
6- string character Iterate

let str = 'abs';
for(let c of str){
    console.log(c)
}

--------------------------------------------------
7- Iterate DOM collections



for(variable of iterable){

}

      let obj = {
        name: "emad",
        family: "taghipur",
      };
      console.log(Object.entries(obj));
      for (const [name, family] of Object.entries(obj)) {
        console.log(name, family);
      }

سرعت for .. of به نسبت for
های معمولی سرعت کمتری دارد و بهتر هستش در آرایه های
بزرگ استفاده نکینم و از آرایه های معمولی بیایم و استفاده بکنیم

*/
