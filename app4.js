arr =[
    "1234567890-=",
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm"
]

function longestWord(arr){
    
    let orderedArray = arr.sort((a, b) =>{
        return b.length - a.length;
        //problems with words with an uppercase letter appearing first
    })
    return orderedArray[2]
}