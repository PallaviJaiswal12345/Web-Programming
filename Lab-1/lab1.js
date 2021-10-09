//Question 1
const questionOne = function questionOne(arr) {
    let obj = {};
    if(arr){
      for(let i=0 ;i < arr.length; i++){
        let result = Math.abs(arr[i]**2 -7);
        if(result < 2){
        obj[result] = false;
    }
      for(let j = 2 ; j < result ; j++){
        if(result %  j === 0){
            obj[result] = false;
            break;
        }
    }
    if(!(result in obj)){
    obj[result] = true;
    }
    }
    return obj;
    }
    else
    {
        return obj;
    }
}

//Question 2
const questionTwo = function questionTwo(arr)
 { 
    let ans = [];
    for(let i=0 ;i < arr.length; i++){
        if(!ans.includes(arr[i]))
        {  
            ans.push(arr[i]);
        }
    }
    return ans;
 }
//Question 3
const questionThree = function questionThree(arr) {
    
    let object = {};
    for(let i=0; i< arr.length; i++){
        let word = arr[i].split('').sort().join('');
        if(word in object){
            if(!object[word].includes(arr[i])){
                object[word].push(arr[i]);
            }
        }
        else{
            object[word] = [arr[i]];
        }
    }
    for(let key in object){
            if(object[key].length<2){
                delete object[key];
            }
    }
    return object;
}
//Question 4
const questionFour = function questionFour(num1, num2, num3) {
   let f1 = 1;
   let f2 = 1;
   let f3 = 1;
   for(let i = num1; i >= 1; i--)  f1 *= i;
   for(let i = num2; i >= 1; i--)  f2 *=  i; 
   for(let i = num3; i >= 1; i--)  f3 *= i; 
   let avg = (num1+num2+num3)/3;
   return Math.floor((f1 + f2 + f3)/avg);

}

module.exports = {
    firstName: "PALLAVI SAROJ", 
    lastName: "JAISWAL", 
    studentId: "10478910",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
}; 
