//const mongoCollections = require('./mongoCollections');
let { ObjectId } = require('mongodb');
//const ObjectId = require('mongodb').ObjectId;
const mongoCollections = require('../config/mongoCollections');
const restaurants = mongoCollections.restaurants;

module.exports = {



async create(name, location, phoneNumber, website, priceRange, cuisines, overallRating, serviceOptions){

if(!name || !location || !phoneNumber || !website || !priceRange || !cuisines || !overallRating || !serviceOptions)  throw 'You must provide all the details for your restaurant'

if(typeof name!= 'string'|| typeof location!= 'string' || typeof phoneNumber!= 'string' || typeof website!= 'string' || typeof priceRange!= 'string') throw 'You must provide a string of name, location, phoneNumber, website, priceRange'

//if (name.length === 0  || location.length === 0 || phoneNumber.length === 0 || website.length === 0 || priceRange.length === 0 ) throw 'You must provide at least one name, location, phoneNumber, website, priceRange'

if((!name.replace(/\s/g, '').length) || (!location.replace(/\s/g, '').length) || (!phoneNumber.replace(/\s/g, '').length) || (!website.replace(/\s/g, '').length) || (!priceRange.replace(/\s/g, '').length)) throw 'You must provide at least one name, location, phoneNumber, website, priceRange'

if(typeof phoneNumber == 'string'){
    if(phoneNumber.length!=12) throw 'Invalid phone number format'
    let p1 = phoneNumber.substring(0,3)
    let p2 = phoneNumber.charAt(3);
    let p3 = phoneNumber.substring(4,7);
    let p4 = phoneNumber.charAt(7);
    let p5 = phoneNumber.substring(8,12);

if(p1<100 || p1>999 || p2!== '-' || p3<100 || p3>999 ||  p4!=='-' || p5<1000 || p5>9999  ) throw 'Phone number not valid'
}

if(typeof website == 'string'){
let s1 = website.substring(0,11)
let s2 = website.substring(11,website.length);

let reg = /\S{5,}\.com$/
if(s1 !== "http://www." || !(s2.match(reg))  ) throw 'Invalid website'
   
}

if(typeof priceRange== 'string' ){
    let size = priceRange.length;
    for(let i=0;i<size;i++)
    {
        if(priceRange[i]!=='$')
        throw `Price range should be between $-$$$$`
    }

   
    if(size < 1 || size > 4)
   throw "Invalid pirceRange";

   
   
}


if(!Array.isArray(cuisines)) throw 'Invalid cuisines'
if(cuisines.length < 1) throw 'Cuisines cannot be empty'
for(let i=0;i<cuisines.length;i++){ 
   if(!cuisines[i]) throw 'Empty string'
    if(typeof cuisines[i] !== 'string') throw 'Input includes non-string value';
    if(!cuisines[i].replace(/\s/g, '').length) throw 'Invalid'
}



if(typeof overallRating!== 'number') throw 'Non-Integer value'


if(Array.isArray(serviceOptions)) throw 'It is an array not an object'
else if (typeof(serviceOptions)!== 'object') throw 'Input not an object';
if (Object.keys(serviceOptions).length == 0 || Object.keys(serviceOptions).length < 3 || Object.keys(serviceOptions).length > 3) throw 'Invalid object';
let objkey = Object.keys(serviceOptions);
if(!objkey.includes('dineIn')||!objkey.includes('takeOut')||!objkey.includes('delivery')) throw 'Invalid key';

if(typeof(serviceOptions.dineIn)!=='boolean' || typeof(serviceOptions.takeOut)!=='boolean' || typeof(serviceOptions.delivery)!=='boolean') throw 'Input includes non-boolean value';






    const restaurantsCollection = await restaurants();
       let newrestaurants = { 
            name: name,
            location: location,
            phoneNumber: phoneNumber,
            website: website,
            priceRange: priceRange,
            cuisines: cuisines,
            overallRating: overallRating,
            serviceOptions: serviceOptions
        }


    const insertInfo = await restaurantsCollection.insertOne(newrestaurants);

    let new_id = insertInfo.insertedId;
    if (insertInfo.insertedCount === 0) throw 'Unable to add restaurant';

    let x  = await restaurantsCollection.findOne(new_id);

    x._id = (x._id).toString();



    return x;
    },



    async getAll(){

        const restaurantsCollection = await restaurants();

        const restaurantsList = await restaurantsCollection.find({}).toArray();
        if(restaurantsList.length === 0) return [];
        for(list in restaurantsList ){
            restaurantsList[list]._id = (restaurantsList[list]._id).toString();
        }
        return restaurantsList;

    },

    async get(id){
    if(!id) throw 'You must provide id';
    if(typeof id!= 'string') throw 'You must provide a string'
    if(!id.replace(/\s/g, '').length) throw 'Provide valid id'
    if(ObjectId.isValid(id)!= true)  throw 'Invalid' 
    let parsedId = ObjectId(id); 
    const restrauntCollection = await restaurants();
    const restro = await restrauntCollection.findOne({ _id: parsedId});
    if (restro === null) throw 'No restaurant with that id';
    let x  = await restrauntCollection.findOne(restro);
    x._id = (x._id).toString();
    return x;
    },


    async remove(id){

    if(!id) throw 'You must provide id';
    if(typeof id!= 'string') throw 'You must provide a string'
    if(!id.replace(/\s/g, '').length) throw 'Invalid id provided'
    if(ObjectId.isValid(id)!= true)  throw 'Invalid' 

    let parsedId = ObjectId(id); 

    const restaurantsCollection = await restaurants();
    const restro = await restaurantsCollection.findOne({ _id: parsedId});
    if (restro === null) throw 'No restaurant with that id';
    let newName = restro['name'];
    const deletionInfo = await restaurantsCollection.deleteOne({ _id: parsedId });
    if (deletionInfo.deletedCount === 0) {
      throw 'Could not delete restaurants with given id';
    }
    return `${newName} has been successfully deleted!`;
    },


    async rename(id, newWebsite){

        if(!id) throw 'You must provide id';
        if(typeof id!== 'string') throw 'You must provide a string'
        if(!id.replace(/\s/g, '').length) throw 'Invalid id provided'
        if(ObjectId.isValid(id)!= true)  throw 'Invalid' 
        if(!newWebsite) throw 'You must provide string';
        if(typeof newWebsite!== 'string' ) throw 'You must provide website as a string'
        if(!newWebsite.replace(/\s/g, '').length)throw 'Invalide website provided'


        if(typeof newWebsite == 'string'){
         let s1 = newWebsite.substring(0,11)
         let s2 = newWebsite.substring(11,newWebsite.length);
         
         let reg = /\S{5,}\.com$/
         if(s1 !== "http://www." || !(s2.match(reg))  ) throw 'error1'
            
         }

         
        let parsedId = ObjectId(id); 
        const restaurantsCollection= await restaurants();

        const restro = await restaurantsCollection.findOne({ _id: parsedId});
        if (restro === null) throw 'No restaurant with that id';
        let newWeb = restro['website'];
        if(newWeb === newWebsite)  throw 'Website already exist'

        const updatedRestro = {
            website: newWebsite
          };
          
          const updatedInfo = await restaurantsCollection.updateOne(
            { _id: parsedId },
            { $set: updatedRestro }
          );

          if (updatedInfo.modifiedCount === 0) {
            throw 'could not update restaurant successfully';
          }

          return await this.get(id);
    }





























};