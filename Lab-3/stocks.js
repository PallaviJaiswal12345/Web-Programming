const axios = require('axios');

async function getStocks() {
  
  let { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json');

  return data;
}

async function getPeople() {
    
    let { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json');
  
    return data;
  }
async function listShareholders(){
    if(arguments.length!==0) throw 'No argument required'
    let s = await getStocks();
    let p = await getPeople();
  let obj={}
    let shar =[];
    let final=[];
   
    for(let stock of s )
    {

        shar=[],obj={};

         for(let share of stock.shareholders)
        {
            
            for(let people of p)
            {
                let t={};
                if(people.id === share.userId)
                {
                    t["first_name"]=people.first_name;
                    t["last_name"]=people.last_name;
                    t["number_of_shares"]=share.number_of_shares;
                    shar.push(t);
              
                }
            }

        }

        obj["id"]=stock.id;
        obj["stock_name"]=stock.stock_name;
        obj["shareholders"]=shar;
        final.push(obj);



    }
return final;

}



async function topShareholder(stockName){
    if(!stockName) throw 'Empty Input';
    if (typeof stockName !== 'string') throw 'Input is not a string';
    if(!stockName.replace(/\s/g, '').length) throw 'Invalid input space';

    let details_1 = await getStocks();
    let details_2 = await getPeople();
    let max = 0,userid,name;
    let flag =0;
    for(let i =0; i< details_1.length; i++){
        if(details_1[i].stock_name === stockName){
            flag =1;
            if(details_1[i].shareholders.length === 0){
    
                return stockName+", currently has no shareholders." ;
            }
            for(let k = 0; k< details_1[i].shareholders.length;k++){
                if(details_1[i].shareholders[k].number_of_shares > max ){
                    max = details_1[i].shareholders[k].number_of_shares;
                    userid= details_1[i].shareholders[k].userId 
                               
                }
            }
        }
    }


for(let j=0;j<details_2.length;j++){
    if(details_2[j].id === userid ){
      name =  details_2[j].first_name +" "+ details_2[j].last_name
    }
}

if(flag===0)
        {
            return 'stock name cannot be found in stocks.json'
        }


return "With "+max+" shares in "+stockName+", "+name+" is the top shareholder."



}

async function listStocks(firstName, lastName){    
    if(!firstName || !lastName) throw 'No input'
    if (typeof firstName !== 'string' || typeof lastName !== 'string') throw 'No inputs are string';
    if(!firstName.replace(/\s/g, '').length || !lastName.replace(/\s/g, '').length) throw 'Invalid input space';
    if(firstName.length<1 && lastName.length<1) throw 'empty strings'

    let details_1 = await getStocks();
    let details_2 = await getPeople();
    let arr = [];
    let flag =0;
    let obj ={};
   
let id;
    for(let i =0;i< details_2.length;i++){
        
        if(details_2[i].first_name === firstName && details_2[i].last_name === lastName){
            flag = 1;
        id = details_2[i].id
        }
    }
        for(let j =0; j< details_1.length;j++){
            for(let k = 0; k< details_1[j].shareholders.length;k++){
                 obj ={};


                if(id === details_1[j].shareholders[k].userId){
                    obj["stock_name"] = details_1[j].stock_name;
                    obj["number_of_shares"] = details_1[j].shareholders[k].number_of_shares;
                    arr.push(obj);
                }

        }
    
    }  
  
if(flag===0)
{
    return 'Person not found'
}


if(obj === null){
    return 'No shares'
}  
  

return arr;
}


async function getStockById(id){

    if(!id) throw 'No input'
    if (typeof id !== 'string') throw 'No inputs are string';
    if(!id.replace(/\s/g, '').length) throw 'Invalid input space';


    let details_1 = await getStocks();
    let obj ={};
   let flag =0;
    let shareholdersobj = [];
    for(let i =0;i<details_1.length;i++){
        for(let k=0;k<details_1[i].shareholders.length;k++){
            let arr = {};
        if(details_1[i].id === id){
            flag =1;
            arr["userId"] = details_1[i].shareholders[k].userId;
            arr["number_of_shares"] = details_1[i].shareholders[k].number_of_shares
            shareholdersobj.push(arr);
            obj["id"] = details_1[i].id;
            obj["stock_name"] = details_1[i].stock_name;
            obj["shareholders"] = shareholdersobj;

        }
        }
    }
if(flag === 0){
    return 'stock not found'
}
return obj;
}

module.exports = {
    firstName: "PALLAVI SAROJ", 
    lastName: "JAISWAL", 
    studentId: "10478910",
    listShareholders,
    topShareholder,
    listStocks,
    getStockById
};