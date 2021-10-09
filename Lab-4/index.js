const restaurants = require("./data/restaurants.js");
const restaurantconnection = require('./config/mongoConnection');



async function main() {
   
     try{
        const FlecheLounge = await restaurants.create("The Fleche Lounge", "Jersey City, New Jersey", "551-266-1764", "http://www.flecheLounge.com", "$$$$", ["Continental", "Indian"], 3, {dineIn: true, takeOut: true, delivery: false
      });
        console.log(FlecheLounge);
        }
        catch (e) {
           console.log(e);
         }


      try{
      const getFlecheLounge = await restaurants.get("615cb31a77c90fb8e774c148"); 
      console.log(getFlecheLounge); 
      }
      catch(e){
         console.log(e);
      }

      try{
         const Payalrestro = await restaurants.create("The Payal restaurant", "New York City, New York", "201-269-1764", "http://www.thepayalrestro.com", "$$$", ["Cuban", "Italian"], 4, {dineIn: true, takeOut: true, delivery: true});
         console.log(Payalrestro);
         }
         catch (e) {
            console.log(e);
          }

        try{
            const allResturants = await restaurants.getAll();
            console.log(allResturants);
        }
        catch (e) {  
            console.log(e);
       }

       try{
         const Vivekmania = await restaurants.create("Vivek's Kitchen", "New York City, New York", "501-211-1114", "http://www.vivekskitchen.com", "$$", ["Cuban", "Italian"], 2, {dineIn: false, takeOut: true, delivery: false});
         console.log(Vivekmania);
         }
         catch (e) {
            console.log(e);
          }
       try{
         const getVivekmania = await restaurants.get("615cb52dbf81b4a10501e926"); 
         console.log(getVivekmania); 
          }
       catch(e){
         console.log(e);
          }
 try{
   const renamedFlecheLounge = await restaurants.rename("615cb31a77c90fb8e774c148", "http://www.fleche.com"); 
console.log(renamedFlecheLounge); 
}
catch(e){
      console.log(e);
   }

   try{
      const getFlecheLounge = await restaurants.get("615cb31a77c90fb8e774c148"); 
      console.log(getFlecheLounge); 
      }
      catch(e){
         console.log(e);
      }
      
try{
   const removePayalrestro = await restaurants.remove("615cb3384b7c6ec528b97d2a"); 
 console.log(removePayalrestro);

}
catch(e){
      console.log(e);
   }

      try{
            const allResturants = await restaurants.getAll();
            console.log(allResturants);
        }
        catch (e) {  
            console.log(e);
       }
   try{
        const theStarMeetLounge = await restaurants.create("The Star Meet Lounge", "Jersey City, New Jersey", "551-26-6-1764", "http://www.thestarmeetlounge.com", "$$$", ["Continental", "Indian"], 5, {dineIn: true, takeOut: true, delivery: false});
        console.log(theStarMeetLounge);
        }
        catch (e) {
           console.log(e);
         }
try{
   const remove = await restaurants.remove("615c9084b716239a7339a931"); 
 console.log(remove);

}
catch(e){
      console.log(e);
   }

try{
   const rename = await restaurants.rename("615c9084b716239a7339a931","http://www.fleche.com"); 
console.log(rename); 
}
catch(e){
      console.log(e);
   }

try{
   const rename1 = await restaurants.rename("615cb52dbf81b4a10501e926", "http://www.fleche.com"); 
console.log(rename1); 
}
catch(e){
      console.log(e);
   }
  try{
      const removeget = await restaurants.get("615c9084b716239a7339a931"); 
    console.log(removeget);
   
   }
   catch(e){
         console.log(e);
      }


        
          process.exit()
  }

main();
