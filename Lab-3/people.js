const axios = require('axios');

async function getPeople() {
  
  let { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json');

  return data;
}


async function getPersonById(id){
if(!id) throw 'Empty Input';
if (typeof id !== 'string') throw 'Input is not a string';
if(!id.replace(/\s/g, '').length) throw 'Invalid input space';



let details = await getPeople();
let result;
let flag =0;
    for(let i =0; i< details.length; i++){
        if(details[i].id.includes(id)){
            flag =1;
            return details[i]; 
        }
      }

      if(flag===0)
        {
            return 'id not found'
        }

 
}


async function sameStreet(streetName, streetSuffix){
    if(!streetName || !streetSuffix) throw 'No input'
    if (typeof streetName !== 'string' || typeof streetSuffix !== 'string') throw 'Input not string';
    if(!streetName.replace(/\s/g, '').length || !streetSuffix.replace(/\s/g, '').length) throw 'Invalid input space';
    if(streetName.length<1 && streetSuffix.length<1) throw 'empty strings'


    let newArray =[];
    let details = await getPeople();
       let i=0;
       while(i<details.length){
        if(details[i].address.home.street_name === streetName && details[i].address.home.street_suffix === streetSuffix || details[i].address.work.street_name === streetName && details[i].address.work.street_suffix === streetSuffix){
             newArray.push(details[i]);

        }
        i++;
    }
    

    
    if(newArray.length < 2) throw 'Values less than 2'
return newArray
   
    
}
 



async function manipulateSsn()
{
    let details = await getPeople();
    let result, numbers;
    let highest = {}
    let lowest  = {}
    let max = 0;
    let min = 999999999999;
    let obj ={};
    let sum = 0;
    let result_1;

    for(let i =0;i< details.length;i++){
     result = details[i].ssn.split('-').sort().join('');
    result_1 = result.split('').sort().join('');
    numbers = parseInt(result_1);
    sum += numbers;
     if(numbers < min){
         min = numbers;
         lowest["firstname"] =  details[i].first_name
         lowest["lastname"] =  details[i].last_name
         
     }
     if(numbers > max){
         max = numbers;
         highest["firstname"] =  details[i].first_name
         highest["lastname"] =  details[i].last_name
     }


     
    }

    obj["highest"] = highest
    obj["lowest"] = lowest
    obj["average"] = Math.floor(sum/details.length)
   

return obj

}



async function sameBirthday(month, day){

if(month<= 0 || day<=0) throw 'Invalid input'
if(!month || !day) throw 'No input'
if(month<0 || month>12) throw 'Invalid month'
let arr1 = [1,3,5,7,8,10,12]
let arr2 = [4,6,9,11]
let arr3 = 2
for(let i=0;i<arr1.length;i++){
    if(arr1[i] == month){
        if(day>= 31){
            throw 'There are not 31 days in this month'
        }
    }
}
for(let j=0;j<arr2.length;j++){
    if(arr2[j]==month){
        if(day>=30)
{
    throw 'There are not 30 days in this month'
}    
}
}
if(month==(2 || 02)){
if(day>=29){
    throw 'There are not 29 days in this month '
}
}





    let details = await getPeople();
    let arrstring = [];
    let date;
    let months;
    let arr = [];
  
    for(let i =0;i< details.length;i++){

arrstring = details[i].date_of_birth.split('/');


if(arrstring[0] == month && arrstring[1] == day )
{
    arr.push(details[i].first_name + details[i].last_name)
}
        }
    return arr;
}

    


module.exports = {
    firstName: "PALLAVI SAROJ", 
    lastName: "JAISWAL", 
    studentId: "10478910",
    getPersonById,
    sameStreet,
    manipulateSsn,
    sameBirthday
}; 
