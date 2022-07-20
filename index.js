const Test_Const_Let = () => {
    const count = { value: 0 }
    for (let i = 0; i < 10; i++) {
        count.value += 1
    }
    return count
}

console.log(Test_Const_Let())
