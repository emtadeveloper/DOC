/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
===================================================================================================================================

حالا میتونیم برای تست نویسی بیایم و به شیوه زیر عمل بکنیم

Mock Service Worker : یک موقعی هستش ما داریم یک کدی رو مینویسیم یک موقعی هستش که یک بخش هایی از کدهامون یا سرویس هامون در اختیار ما نیستند و ما نمی تونیم اون
فانکشنالیتی رو در اختیار داشته باشیم برای همین اون فانکشنالیتی اصلی رو با یک فانکشنالیتی فیک جا به جا میکنیم که برای نصب اون از 

yarn add msw --dev برای نصب اون از این دستور استفاده میکنیم

حالا اگر بخایم بیایم و  یک تست سرور راحت تر بگیریم میتونیم به شیوه زیر عمل بکنیم

import { reset }  from "msw"
import { setupServer } from "msw/node"

const server = setupServer(()=>{
    rest.get("/post/:id" , ( req , res , ctx ) => {
        return res(ctx.json({
              title : "sample post title" , 
              body : "sample body"
        }))
    }
})

beforeAll (()=> { server.listen() )
afterEach ( () => server.resethandlers() )
afterAll ( () => server . close() )


===================================================================================================================================

jest.fn به نام jest برای تست کردن درخواست های سمت سرور باید از یک تابع استفاده کنیم در داخل 

// services.js

function getUserById(id) {
    console.log("reading data from db ...")
    const users = [
        { id: 1, name: "mohamad", purchasetsCount: 5 },
        { id: 2, name: "amir", purchasetsCount: 3 },
        { id: 3, name: "yaser", purchasetsCount: 2 },
    ]
}


function sendEmail(name, message) {
    console.log('email sent !')
}

module.exports = {
    getUserById,
    sendEmail
}


code.js

function calculateDiscount(id) {
    let discount = 0
    const user = service.getUserById(id)
    if (user.purchasetsCount > 3)
        discount = 10
    service.sendEmail(user.name, `you have got ${discount} percent discount`)
    return discount
}

module.exports = { gte, wellcomeMessage, shoppingList, getUser, login, calculateDiscount }


// test.js

describe("calculateDiscount", () => {
    beforeEach(() => {
        service.sendEmail = jest.fn()
    })

    it("should return 10 if user has more than 3 purechase", () => {
        // const mockFunction = jest.fn()
        // mockFunction.mockResolvedValue(2) // برگردونه resolve و promise کاری میکنه که برامون یک 
        // mockFunction.mockRejectedValue(new Error("error"))
        // await  mockFunction()
        service.getUserById = jest.fn().mockReturnValue({ id: 4, name: "jhone", purchasetsCount: 7 })
        expect(calculateDiscount()).toBe(10)
    })
    it("should return 10 if user has more than 3 purechase", () => {
        service.getUserById = jest.fn().mockReturnValue({ id: 4, name: "jhone", purchasetsCount: 2 })
        expect(calculateDiscount()).toBe(0)
    })

    it("should send an email", () => {
        service.getUserById = jest.fn().mockReturnValue({
            id: 4, name: "jhone", purchasetsCount: 10  
        })
        calculateDiscount()
        expect(service.sendEmail).toHaveBeenCalled()
        expect(service.sendEmail.mock.calls[0][0]).toBe('jhone')
        expect(service.sendEmail.mock.calls[0][1]).toContain('10 percent')
    })

})


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
