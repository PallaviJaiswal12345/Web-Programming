const sortString = function sortString(string){
    if(!string) throw 'No input provided';
    if(string.length<1) throw "Input is an empty string";
    if (typeof string !== 'string') throw 'Input is not a string'
    if(!string.replace(/\s/g, '').length) throw 'Invalid input'
    
    let num = [];
        let AlphaLower = [];
        let AlphaUpper = [];
        let special = [];
        let val = [];
        let space = []
    let finalstring ="";
        
        
            let j =0;
while(j<=string.length){
            if(string.charCodeAt(j) >= 48 && string.charCodeAt(j) <= 57){
                num.push(string.charAt(j));
            }
            else if(string.charAt(j) >= "A" && string.charAt(j) <= "Z" ){
                AlphaUpper.push(string.charAt(j));
            }
            else if(string.charAt(j) >= "a" && string.charAt(j) <= "b" ){
                AlphaLower.push(string.charAt(j));
            }
            else if(string.charCodeAt(j) == 32){
                space.push(string.charAt(j));
            }
            else{
                special.push(string.charAt(j));
            }
           j++;
        }
   

    num.sort(function(x,y){return x-y});
    AlphaUpper.sort();
    AlphaLower.sort();
    for(let j=0;j<AlphaUpper.length;j++){
        val.push(AlphaUpper[j]);
    }
  
    for(let j=0;j<AlphaLower.length;j++){
      val.push(AlphaLower[j]);
  }
  for(let j=0;j<special.length;j++){
    val.push(special[j]);
}
  
  for(let j=0;j<num.length;j++){
      val.push(num[j]);
  }
for(let j=0;j<space.length;j++){
    val.push(space[j]);
}
finalstring = val.join(""); 
return finalstring;
}

const replaceChar = function replaceChar(string, idx){
    if(!string) throw 'No input provided';
    if(string.length<1) throw "Input is an empty string";
    if (typeof string !== 'string') throw 'Input is not a string';
    if(!string.replace(/\s/g, '').length) throw 'Invalid input'
    if (typeof idx !== 'number') throw 'Index not an integer';
    if(idx <= 0 || idx > string.length -2 ) throw 'Invalid index';

    let value = string.charAt(idx);
    let valbefore = string.charAt(idx-1);
    let valafter = string.charAt(idx+1);
    let count = 0;
    
        let j =0;
while(j<=string.length){
        if(value == string.charAt(j) && j!=idx && count%2 == 0){
            string = string.substring(0, j) + valbefore + string.substring(j+1);
            count++;
        }
        else if(value == string.charAt(j) && j!=idx && count%2 == 1)
        {
            string = string.substring(0, j) + valafter + string.substring(j+1);
            count++;
        }
        j++;
    }
    

    return string;
}




const mashUp = function mashUp(string1, string2, char){
    if(!string1) throw 'No input provided';
    if(!string2) throw 'No input provided';
    if(!char) throw 'No input provided';
    if(typeof(string1) !== 'string') throw 'Input is not a string';
    if(typeof(string2) !== 'string') throw 'Input is not a string';
    if(typeof(char) !== 'string') throw 'Input is not a string';
    if (!string1.replace(/\s/g, '').length) throw 'Input invalid';
    if (!string2.replace(/\s/g, '').length) throw 'Input invalid';
    if (!char.replace(/\s/g, '').length) throw 'Input invalid';
let newString = "";

if(string1.length === string2.length)
    for(let j = 0;j<string1.length;j++){
  newString = newString + string1.charAt(j)+(string2.charAt(j)); 
}
else if(string2.length < string1.length) {
    for(let j=0;j<string2.length;j++){
        newString = newString + string1.charAt(j) + string2.charAt(j);
        }
        for(let j = string2.length; j< string1.length;j++){
            newString = newString + string1.charAt(j)+char;
        }

 }  
else if(string1.length < string2.length){
    for(let j=0;j<string1.length;j++){
    newString = newString + string1.charAt(j) + string2.charAt(j);
    }
    for(let j = string1.length; j< string2.length;j++){
        newString = newString + char + string2.charAt(j);
    }
}
 
 return newString;
}




module.exports = {
    firstName: "PALLAVI SAROJ", 
    lastName: "JAISWAL", 
    studentId: "10478910",
    sortString,
    replaceChar,
    mashUp

}; 
