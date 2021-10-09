const computeObjects = function computeObjects(objects, func){
    if(!objects) throw 'No input'
    if (!Array.isArray(objects)) throw 'Input not an  object';
    if (typeof objects != 'object') throw 'Input not an object';
    if (Object.keys(objects).length == 0) throw 'Object cannot be empty';
    if (typeof func !== 'function' || !func instanceof Function) throw 'Not a function'


let obj = {};
for(let x of Object.entries(objects))
{
 for(let [key1,value1] of Object.entries(x[1]))
 {
     if(obj[key1] == undefined)
     {
        obj[key1]=func(value1);   
     }
     else
     {
        obj[key1]=obj[key1]+func(value1);
     }
   
 }
    

    
}

return obj;
}



const commonKeys = function commonKeys(obj1, obj2)
{
     if(!obj1 && !obj2) throw 'No input'
     if (typeof obj1 !== 'object' || typeof obj2 !== 'object') throw 'Input not an object';
     if(obj1.length<1 && obj2.length<1) throw 'empty object';
    
    let obj = {};
    for(let [key,value] of Object.entries(obj1)){
        for(let [key1,value1] of Object.entries(obj2)){
            if( typeof value === "number"){
            if((key === key1) && (value === value1)){
               
                        obj[key] = value;
                   
            }
        }
        else{
            let a={};
            for(let [key2,value2] of Object.entries(value)){
                for(let [key3,value3] of Object.entries(value1)){
                    if((key2 === key3) && (value2 === value3)){
               
                        a[key2] = value2;
                   
            }
                }

        }

         obj[key] = a;     
        }
    }
        
        
    }
    return obj;
}





const flipObject = function flipObject(object){
let obj = {};
if(!object) throw 'No input'
if (typeof object !== 'object') throw 'Input not an object';


for(let [key,value] of Object.entries(object)){
    if(typeof value === "number"){
    obj[value] = key;
    }
    else{
        let a={}
        for(let [key1,value1] of Object.entries(value)){
        a[value1]=key1
        }
        obj[key] = a;
    }
}
return obj;
}

module.exports = {
    firstName: "PALLAVI SAROJ", 
    lastName: "JAISWAL", 
    studentId: "10478910",
    computeObjects,
    commonKeys,
    flipObject

}; 