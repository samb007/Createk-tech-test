function oddEvenRounding (num){

    let integer = Math.floor(num)
    let decimal = num - integer

    // Realised after the fact that this if statement is redundant
    if (integer % 2 == 0 && decimal == 0.5){
        return Math.ceil(num)
    }

    else if (integer % 2 == 1 && decimal == 0.5){
        return Math.floor(num)
    }

    else {
        return Math.round(num)
    }
}
console.log(oddEvenRounding(1.5))
console.log(oddEvenRounding(2.5))
console.log(oddEvenRounding(2.4))