/*
------------------------------------------------------------------------------------------------------------
============================================================================================================

نیازی بهlinear در این هستش که ما در نوع  linear مهم ترین نوع این مدل سرچ با نوع سرچ به صورت  
مرتب سازی نداشتیم ولی در این مدل باید بیایم و مرتب سازی رو هم انجام بدهیم

ما اگر بخایم بیایم و از این روش استفاده بکنیم بهتر هستش که بیایم و  آرایه یا المان هامون رو مرتب سازی
بکنیم

function findElement(sortedArr, element) {
    let startIndex = 0
    let endIndex = sortedArr.length - 1

    const middleIndex = Math.floor((endIndex - startIndex) / 2)
    if (element == sortedArr[middleIndex]) {
        return middleIndex
    }
}

const number = [3, 5, 10, 22, 51]

console.log(findElement(number, 10))


============================================================================================================
------------------------------------------------------------------------------------------------------------
*/