

const average = function average(arrays){
        if(!arrays) throw 'No input provided';
        if(!Array.isArray(arrays)) throw 'Input is not an array';
        if(arrays.length<1) throw 'Input is an empty array';
        let total = 0;
        let count = 0
    for(let i =0 ; i<arrays.length ; i++){
        if(arrays[i].length<1) throw 'Input includes an empty array';
        count +=  arrays[i].length
        
        for(let j = 0; j< arrays[i].length; j++){
            if(typeof(arrays[i][j])!== 'number') throw 'Input includes non-interger value';
     total += arrays[i][j];
    }
}
  let avg = Math.round((total)/(count));
   return avg;
    } 


    

const modeSquared = function modeSquared(array){
if(!array) throw "No input provided";
if(!Array.isArray(array)) throw "Input is not an array";
if(array.length<1) throw "Input is an empty array";
let obj ={};
let maximum = 0;
let result = 0;
for(let i =0; i<array.length;i++){
    if(typeof(array[i])!== 'number') throw 'Input includes non-interger value';
    if(array[i] in obj){
        obj[array[i]] = parseInt(obj[array[i]]) + 1;
    }
    else{
        obj[array[i]] = 0;
    }
   if(obj[array[i]] > maximum){
        maximum = obj[array[i]];
    }
}
if(maximum === 0){
    return 0;
}

for(x in obj){
    if(obj[x]===maximum){
result= result+(x*x);
    }

    
}

return result;


}


const medianElement = function medianElement(array){
    if(!array) throw "No input provided";
    if(!Array.isArray(array)) throw "Input is not an array";
    if(array.length<1) throw "Input is an empty array";
    let obj = {};
    let result = 0;
         let s = array.sort(function(x,y){return x-y});
           let size = s.length;
           for(let i = 0;i < size; i++){
            if(s[i].length<1) throw 'Input includes an empty array';
            if(typeof(s[i])!== 'number') throw 'Input includes non-interger value';

          if(size % 2 === 0){
          result = (s[size/2 - 1] + s[size/2])/2;
          obj[result] = s.indexOf(result);
          }
          else{
            result = s[(size-1)/2];
           obj[result] = s.indexOf(result);
          }
          }
          return obj;
}

const merge = function merge(arrayOne, arrayTwo){
    if(!arrayOne) throw "No input provided";
    if(!Array.isArray(arrayOne)) throw "Input is not an array";
    if(arrayOne.length<1 && arrayTwo.length<1) throw "Input1 and Input2 is an empty array";
    if(arrayOne.length<1) throw "Input is an empty array";
    if(!arrayTwo) throw "No input provided";
    if(!Array.isArray(arrayTwo)) throw "Input is not an array";
    if(arrayTwo.length<1) throw "Input is an empty array";
    

    let num = [];
    let upper = [];
    let lower = [];
    let val = [];
for(let i =0; i<arrayOne.length;i++){
    if(arrayOne[i] == null){
        throw 'Input is null'
    }

if(typeof(arrayOne[i])!== 'number' && typeof(arrayOne[i])!== 'string') throw 'Input includes non-interger and non-string  value';

    
    if(typeof(arrayOne[i]) == 'number'){
               num.push(arrayOne[i]);
           } 
    else if(arrayOne[i] >= "A" && arrayOne[i] <= "Z") {
                upper.push(arrayOne[i]);
              }   
    else if(arrayOne[i] >= "a" && arrayOne[i] <= "z" ){
                 lower.push(arrayOne[i]);
                }    
    else throw 'Not a valid input';              

}

for(let i =0; i<arrayTwo.length;i++){
    
    if(arrayTwo[i] == null){
        throw 'Input is null'
    }
 if(typeof(arrayTwo[i])!== 'number' && typeof(arrayTwo[i])!== 'string') throw 'Input includes non-interger and non-string  value';
    
    if(typeof(arrayTwo[i]) == 'number'){
               num.push(arrayTwo[i]);
           } 
    else if(arrayTwo[i] >= "A" && arrayTwo[i] <= "Z") {
                upper.push(arrayTwo[i]);
              }   
    else if(arrayTwo[i] >= "a" && arrayTwo[i] <= "z" ){
                 lower.push(arrayTwo[i]);
                }    
    else throw 'Not a valid input';              

}

  num.sort(function(x,y){return x-y});
  upper.sort();
  lower.sort();

  for(let i=0;i<lower.length;i++){
      val.push(lower[i]);
  }

  for(let i=0;i<upper.length;i++){
    val.push(upper[i]);
}

for(let i=0;i<num.length;i++){
    val.push(num[i]);
}

return val; 
}







module.exports = {
    firstName: "PALLAVI SAROJ", 
    lastName: "JAISWAL", 
    studentId: "10478910",
    average,
    modeSquared,
    medianElement,
    merge
}; 