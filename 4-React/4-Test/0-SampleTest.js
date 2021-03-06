/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
===================================================================================================================================

ساده ترین نوع تست نویسی

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

sum.js

function   sum ( a , b ) {  return  a  + b }

const result = sum ( 1 , 2)

if ( 3 === result ) { console.log ( " success " )  }  else  { console.log ( " failed " )   }

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

حالا برای خوشگل تر نوشتن اش میتونیم بیایم و اون رو داخل یک فایل دیگه بکنیم

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// sum.js

function   sum ( a , b ) {  return  a  + b }    module.exports = sum

// sum.test.js

const sum = require("./sum")

const result = sum ( 1 , 2)

if ( 3 === result ) { console.log ( " success " )  }  else  { console.log ( " failed " )   }

===================================================================================================================================

هامون هستش exciution pass نکته : تعداد تست هایی که برای اجرا ما نیاز داریم بزرگ تر یا مساوی مسیر های اجرایی ما یا اصطلاحا

code.js 

function gte(a, b) {
    if (a > b) return true
    if (a < b) return false
    if (a == b) return true
}

module.exports = gte


// code.test.js

const gte = require("./../code")

test("gte - should return true if a is grater than b", () => {
    const result = gte(10, 5)
    expect(result).toBe(true)
})

test("gte - should return false if a is less than b", () => {
    const result = gte(5, 10)
    expect(result).toBe(true)
})

test("gte - should return true if a is equal b", () => {
    const result = gte(5, 5)
    expect(result).toBe(true)
})


===================================================================================================================================

describe برای گروه بندی تست هامون هم از این متد باید بیایم و استفاده بکنیم

function gte(a, b) {
    return a >= b ? true : false
}

function wellcomeMessage(name) {
    return `hello ${name} wellcome to jest tutorial`
}

function shoppingList() {
    return ["peanut", "cake", "milk"]
}

function getUser() {
    return { id: 2, name: "mohamad" }
}

function login(password) {
    if (password !== "1234") {
        throw new Error("password is wrong")
    }
    return { jwt: "w9j2gmf@#Fewdsf" }
}

module.exports = { gte, wellcomeMessage, shoppingList, getUser, login }

const { gte, wellcomeMessage, shoppingList, getUser, login } = require("./../code")

describe("gte", () => {
    it("gte - should return true if a is grater than b", () => {
        const result = gte(10, 5)
        expect(result).toBe(true)
    })

    it("gte - should return false if a is less than b", () => {
        const result = gte(5, 10)
        expect(result).toBe(false)
    })

    it("gte - should return true if a is equal b", () => {
        const result = gte(5, 5)
        expect(result).toBe(true)
    })
})


describe("wellcomeMessage", () => {
    it("should return a welcome message containing the name ", () => {
        const result = wellcomeMessage("emad")
        expect(result).toContain("emad")
    })
})


describe("shoppingList", () => {
    it("should pass if the shopping list has milk on it", () => {
        const result = shoppingList()
        expect(result).toContain("milk")
    })
})


describe("getUser", () => {
    it("should pass if the shopping list has milk on it", () => {
        const result = getUser()
        // expect(result).toEqual({ id: 1, name: "mohamad" })
        // expect(result).toMatchObject({ id: 2 })
        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('id', 2)
    })
})


describe("login", () => {
    it("should throw an error if password is wrong", () => {
        expect(() => { login('3456') }).toThrow()
    })
    it("should returns jwt if password is not wrong", () => {
        const result = login('1234')
        expect(result).toHaveProperty('jwt')
    })

})

===================================================================================================================================

ما میتونیم بیایم و چک کنیم ببینیم که ایا به ری فکتور کردن کدهامون آیا تست هامون به مشکل میخوره یا نه

سعی کنید تست هارو  به صورت کلی بنویسیم ک خیلی سریع نیان و پاس نشن

function gte(a, b) {
   return a >= b ? true : false
}

toBe و toEqual  تفاوت 

وقتی ما میخایم بیایم و دوتا  آبجکت رو باهم مقایسه کنیم به واسطه این که آدرس های حافظه شون باهم دیگه متفاوت هستش

استفاده بکنیم toEqual داخل تست کردن ما به مشکل بر میخوریم که برای اینکه همچین مشکلی رو بر نخوریم بهتر هستش که بیایم و از 

استفاده بکنیم toMatchObject  همچنین برای اینکه بیایم و یک مقدار خاص رو در داخل آبجکت امون چک بکنیم میتونیم بیایم و از 
 
یک موقع هایی هست ما میخایم بیایم و چک بکنیم که اگر پسورد ما غلط بود آیا تابع ما یک خطا رو پرتاب میکنه یا نه برای این کار
باید به شیوه زیر بیایم و عمل بکنیم

expect(()=>{login('3456')}).toThrow()


===================================================================================================================================
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
