/*
===================================================================================================================================

TDD : Test Diven Development  or Test Frist 

ما به طور معمولی میومدیم اول کدهامون رو می نویشتیم و بعد برای کدهامون میومدیم و تست می نوشتیم ولی در این نوع رویکرد ما
باید بیایم و در ابتدا تست هامون بنویسیم و بعد برای تست هامون کد بنویسیم
 
const C alculator = require("./../code")

describe("calculateDiscount" , ()=> {
    let calculator

    beforeEach (()=> {
      calculator = new calculator(10,5)
     })

    it("should have a and b property" , ()=>{
        expect(calculator).toHaveProperty("a")
        expect(calculator).toHaveProperty("b")
    })

    it("add",()=>{
        expect(calculator.add()).toBe(15)
    })

    it("sub",()=>{
        expect(calculator.sub()).toBe(5)
    })

    it("div",()=>{
        expect(calculator.div()).toBe(2)
    })

    it("mul",()=>{
        expect(calculator.mul()).toBe(50)
    })

})

 

// code.js  حالا ما در اینجا میایم و کدهامون رو می نویسیم

class Calculator {
    constructor(a,b){
        this.a = a
        this.b = b
    }

    add(){
        return this.a + this.b
    }

    sub(){
        return this.a - this.b
    }

    div(){
        return this.a / this.b
    }

    mul(){
        return this.a * this.b
    }
}

module.exports = Calculator



===================================================================================================================================
*/