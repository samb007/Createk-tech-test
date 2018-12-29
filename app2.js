let str = 'Hello world I am Sam. I am studying at Code Nation';

function words(str){
    return str.split(" ").length;
}

function sentences(str){
    return str.split(".").length;
}

function longestWord(str){
    let wordsArray = str.split(" ");
    let orderedArray = wordsArray.sort((a, b) =>{
        return b.length - a.length;
        //problems with words with an uppercase letter appearing first
    })
    return orderedArray[0]
}

function averageLength(str){
    const wordsArray = str.split(" ");
    return wordsArray.join('').length/wordsArray.length

}
function above3Char(str){
    let wordCount = 0;
    const wordsArray = str.split(" "); 
    for (let i=0; i<wordsArray.length; i++){
        if (wordsArray[i].length >= 3){
            wordCount++
        }
    }return wordCount
}

let wordObj = {
    numberOfWords: `${words(str)}`,
    numberOfSentences: `${sentences(str)}`,
    theLongestWord: `${longestWord(str)}`,
    averageLengthOfWord: `${averageLength(str)}`,
    wordsAbove3Char: `${above3Char(str)}`
}

const myJSON = JSON.stringify(wordObj);
    

