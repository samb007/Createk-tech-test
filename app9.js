let arr = [1, 6, 5, 'mary', 'sean', 6, 'peter', 'mary']

let uniqueElements = arr.reduce(function(a,b){
    if (a.indexOf(b) < 0 ){
         a.push(b)
    }
    return a;
  },[])

console.log(uniqueElements)