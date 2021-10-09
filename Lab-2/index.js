const arrayUtils = require("./arrayUtils");

try {
    const average = arrayUtils.average([[1], [2], [3]]);
    console.log('mean passed successfully');
 } catch (e) {
    console.error('mean failed test case');
 }

 try {
    const average = arrayUtils.average(1234);
    console.error('mean did not error');
 } catch (e) {
    console.log('mean failed successfully');
 }

 try {
    const average = arrayUtils.average([[1,3], [2,4,5]]);
    console.log('mean passed successfully');
 } catch (e) {
    console.error('mean failed test case');
 }

 try {
    const average = arrayUtils.average([[1,3], ["hi",4,5]]);
    console.error('mean did not error');
 } catch (e) {
    console.log('mean failed successfully');
 }


 


//---------modeSquared-----------//

try {
    const mode = arrayUtils.modeSquared([1, 2, 3, 3, 4]);
    console.log('mode passed successfully');
 } catch (e) {
    console.error('mode failed test case');
 }

 try {
    const mode = arrayUtils.modeSquared("banana");
    console.error('mode did not error');
 } catch (e) {
    console.log('mode failed successfully');
 }

 


//---------------------Median--------------------//

try {
    const median = arrayUtils.medianElement([5, 6, 7]);
    console.log('median passed successfully');
 } catch (e) {
    console.error('median failed test case');
 }

 try {
    const median = arrayUtils.medianElement("test");
    console.error('median did not error');
 } catch (e) {
    console.log('median failed successfully');
 }

 try {
    const median = arrayUtils.medianElement([1, 2, 3]);
    console.log('median passed successfully');
 } catch (e) {
    console.error('median failed test case');
 }

 try {
    const median = arrayUtils.medianElement("star");
    console.error('median did not error');
 } catch (e) {
    console.log('median failed successfully');
 }


//-------------------Merge--------------------------//

try {
    const merge = arrayUtils.merge(['A', 'B', 'a'], [1, 2, 'Z']);
    console.log('merge passed successfully');
 } catch (e) {
    console.error('merge failed test case');
 }

 try {
    const merge = arrayUtils.merge([] ['ab', 'ts']);
    console.error('merge did not error');
 } catch (e) {
    console.log('merge failed successfully');
 }



//---------------------------------STRINGUTILS------------------------------------------------------//
  const stringUtils = require("./stringUtils.js");


try {
    const sortString = stringUtils.sortString('123 FOO BAR!');
    console.log('sortString passed successfully');
 } catch (e) {
    console.error('sortString failed test case');
 }

 try {
    const sortString = stringUtils.sortString(123);
    console.error('sortString did not error');
 } catch (e) {
    console.log('sortString failed successfully');
 }





/////////--------------------replaceChar--------------------//////////



try {
    const replaceChar = stringUtils.replaceChar("Daddy", 2);
    console.log('replaceChar passed successfully');
 } catch (e) {
    console.error('replaceChar failed test case');
 }

 try {
    const replaceChar = stringUtils.replaceChar(123);
    console.error('replaceChar did not error');
 } catch (e) {
    console.log('replaceChar failed successfully');
 }

    

///////////////////----------------mashUp-------------------//////////////////////////

try {
    const mashUp = stringUtils.mashUp("Patrick", "Hill", "$");
    console.log('mashUp passed successfully');
 } catch (e) {
    console.error('mashUp failed test case');
 }

 try {
    const mashUp = stringUtils.mashUp("h", "Hello", 4);
    console.error('mashUp did not error');
 } catch (e) {
    console.log('mashUp failed successfully');
 }





//----------------------------------------OBJUTILS.JS------------------------------------------------//
const objUtils = require("./objUtils.js");


try {
    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const computeObjects = objUtils.computeObjects([first, second], x => x * 2);
    console.log('computeObjects passed successfully');
 } catch (e) {
    console.error('computeObjects failed test case');
 }
 try {
   
    const computeObjects = objUtils.computeObjects({});
    console.error('computeObjects did not error');
 } catch (e) {
    console.log('computeObjects failed successfully');
 }


///------------------------------commonKeys-------------------------------------///////////////



try {
    const third = {a: 2, b: {x: 7}};
const fourth = {a: 3, b: {x: 7, y: 10}};
    const commonKeys = objUtils.commonKeys(third, fourth);
    console.log('commonKeys passed successfully');
 } catch (e) {
    console.error('commonKeys failed test case');

 }

 try {
    const commonKeys = objUtils.commonKeys({});
    console.error('commonKeys did not error');
 } catch (e) {
    console.log('commonKeys failed successfully');
 }


 ///------------------------------flipObject------------------------------------------------///////////////////////

 try {
  
    const flipObject = objUtils.flipObject({ a: 3, b: 7, c: 5 });
    console.log('flipObject passed successfully');
 } catch (e) {
    console.error('flipObject failed test case');

 }

 try {
    const flipObject = objUtils.flipObject();
    console.error('flipObject did not error');
 } catch (e) {
    console.log('flipObject failed successfully');
 }




