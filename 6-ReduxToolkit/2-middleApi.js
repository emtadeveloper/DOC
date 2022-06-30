/*
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================

5- createAsyncThunk :  و دومی یک Param که به عنوان مقدار اولیه میاد و دو تا مقدار رو میگیره اولی یک  payload و دومی هم یک Type هستش که میاد و دو تا مقدار رو دریافت میکند اولی یک  API  یک 
البته به عنوان پارامتر سوم هم میاد و یک تابع رو میگیره به نام  rejected  و peding و fullfiled و هنگامی که به عنوان یک تابع میایم و پاسش می دهیم میاد و به ما 3 تا تابع رو پاس میده به نام های  thunkApi
 دیگه اجرا نشه و درخواست رو نفرستهfullfiled که میتونیم بیایم و کنترل کنیم که بیاد و مثلا اگر درخواست ما به صورت  condition 

هستش  extra و getState و dispatch  چیزی رو که برای ما میاد و برگشت میدهد همون createAsyncThunk

ما میتونیم به دو صورت یا در دو مقطع زمانی بیایم و عملیات های اسنیک امون رو متوقف کنیم اولین مقطع قبل ارسال درخواست هامون هستش و حالت دوم زمانی هستش که اون درخواست اجرا شده و در زمان اجرا
شدن بیایم و اون عملیات رو جلوشو بگیریم

reduxtoolkit  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import { createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from './api/client'

const initialState = { status: 'idle' }
    
export const fetechTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (params, thunkApi) => {
        const response = await client.get('todos')
        console.log(response);
    } , {
        condition : ( params , { getState } ) => { 
            const todos { todos } = getState( )
            if ( "pending" === todos.status ) {
                return false  با این تیکه کد فقط یک بار درخواست ما ارسال میشه و بار های دیگه ارسال نمیشه
            }
        }
    })

const todosReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetechTodos.pending, (state, action) => {
            state.status = 'pending'
        })
})

export default todosReducer

====================================================================================================================================================

6- createEntitiyAdapter :  به ما کمک میکنه اون ریکوست هایی که از سمت سرور دریافت کردیم و آرایه هستند بیایم و تبدیل اشون کنیم به یک آبجکت و یکسری توابع برای راحتی کارمون بهمون تحویل بده
رو انجام بدیم CRUD هستند که میتونیم بیایم و عملیات های  reducer  و یکسری توابع ام بهمون میده که کارمون رو راحت تر میکنه که یکسری 

addOne   setAll قبلی هارو کامل پاک میکنه   addMany      removeOne     removeMany     updateOne     updateMany     changes  




selectId :  (user)=> user.id   مشخص کنند این هستش که اون آیدی منحصر به فردی که آیدی ما داره دقیقا چی هستش
sortComparer : (a , b) => a.name.localeCompare(b.name)



====================================================================================================================================================
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
