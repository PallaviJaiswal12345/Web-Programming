const people = require("./people");
const stock = require("./stocks");

async function main(){

//////////////////---------------People----------------------------------------------------------------//////////////////



    try{
        const peopledata = await people.getPersonById("7989fa5e-8f3f-458d-ad58-23c8d9ef5a10");
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    try{
        const peopledata = await people.getPersonById(-1);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    try{
        const peopledata = await people.getPersonById(1001);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    try{
        const peopledata = await people.getPersonById();
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    try{
        const peopledata = await people.getPersonById('7989fa5e-5617-43f7-a931-46036f9dbcff');
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

//     /////////////////////////////// sameStreet() //////////////////////////////////////////////////////////////

    try{
        const peopledata = await people.sameStreet("Sutherland", "Point");
        console.dir(peopledata, { "depth": null });
    }catch(e){
        console.log (e);
    }

    try{
        const peopledata = await people.sameStreet(1,"Street");
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameStreet("Street", 1);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameStreet("Street");
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameStreet();
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    try{
        const peopledata = await people.sameStreet( "Crownhardt","Park");
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }


//   ///////////////////////////////// manipulateSsn() ///////////////////////////////////////////////////////////////


    try{
        const peopledata = await people.manipulateSsn();
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

     ///////////////////////////////// sameBirthday() ///////////////////////////////////////////////////////////////

    try{
        const peopledata = await people.sameBirthday(09, 25);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameBirthday(9, 25);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    try{
        const peopledata = await people.sameBirthday("09", "25");
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }
    try{
        const peopledata = await people.sameBirthday(09, 31);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    try{
        const peopledata = await people.sameBirthday(13, 25);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }


    try{
        const peopledata = await people.sameBirthday(02, 29);
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }

    try{
        const peopledata = await people.sameBirthday("09", "31");
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }


try{
        const peopledata = await people.sameBirthday(("12", " "));
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }


try{
        const peopledata = await people.sameBirthday();
        console.log (peopledata);
    }catch(e){
        console.log (e);
    }


    ///////----------------------------------stock------------------------------------------------------/////////////////////////

    try{
        const stocks_1 = await stock.listShareholders();
        console.dir(stocks_1, { "depth": null });
    }catch(e){
        console.log (e);
    }

    try{
        const stocks_1 = await stock.listShareholders('7283e5d6-7481-41cb-83b3-5a4a2da34717');
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }
    
    try{
        const stocks_1 = await stock.listShareholders('Nuveen Preferred and Income 2022 Term Fund');
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }


    //////////////// topShareholder//////////////////////////////////

    try{
        const stocks_1 = await stock.topShareholder('Aeglea BioTherapeutics, Inc.');
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }

    try{
        const stocks_1 = await stock.topShareholder('Nuveen Floating Rate Income Fund');
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }


    try{
        const stocks_1 = await stock.topShareholder('Powell Industries, Inc.');
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }

    try{
        const stocks_1 = await stock.topShareholder(43);
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }

    try{
        const stocks_1 = await stock.topShareholder('      ');
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }

    try{
        const stocks_1 = await stock.topShareholder('Foobar Inc');
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }

    try{
        const stocks_1 = await stock.topShareholder();
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }




//     ////////////////////////////////// listStocks(firstName, lastName) //////////////////////////////////////////////////


    try{
        const stocks_1 = await stock.listStocks("Grenville", "Pawelke" );
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }


    try{
        const stocks_1 = await stock.listStocks('Patrick', "Hill");
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }


    try{
        const stocks_1 = await stock.listStocks();
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }



    try{
        const stocks_1 = await stock.listStocks("foo");
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }



    try{
        const stocks_1 = await stock.listStocks("      ", "        ");
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }

    try{
        const stocks_1 = await stock.listStocks(1,2);
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }

    //////////////////////////////////////  getStockById(id) //////////////////////////////////////////

    try{
        const stocks_1 = await stock.getStockById("f652f797-7ca0-4382-befb-2ab8be914ff0");
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }

    try{
        const stocks_1 = await stock.getStockById(-1);
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }

    try{
        const stocks_1 = await stock.getStockById(1001);
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }

    try{
        const stocks_1 = await stock.getStockById();
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }


try{
        const stocks_1 = await stock.getStockById('7989fa5e-5617-43f7-a931-46036f9dbcff');
        console.log (stocks_1);
    }catch(e){
        console.log (e);
    }

}


main();