var countSheep = function (num){
    //your code here
    let result = "";
    let kardusDomba = " sheep...";
    
    for(let i = 1; i <= num; i++) {
        result += i + kardusDomba;
    }
    return result;
}

console.log(countSheep(2));