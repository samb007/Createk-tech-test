function caseSwap (str){
    let characters = str.split('')
    let strArr = []
    for (let i=0; i < characters.length; i++){
       if (characters[i] == characters[i].toLowerCase()){
           strArr.push(characters[i].toUpperCase())
       }else {
           strArr.push(characters[i].toLowerCase())
        
       }  
   
    }  return strArr.join('')
 
}
console.log(caseSwap('JohnSmith'))