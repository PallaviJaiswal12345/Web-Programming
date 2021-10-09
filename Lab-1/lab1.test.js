const lab1 = require("./lab1");
//Question one test cases
console.log("Question 1 result");
console.log(lab1.questionOne([5, 3, 10]));
console.log(lab1.questionOne([0, 2, 3]));
console.log(lab1.questionOne([2]));
console.log(lab1.questionOne([]));
console.log(lab1.questionOne()); 

//Question two test cases
console.log("Question 2 result");
console.log(lab1.questionTwo([1, 1, 1, 1, 1, 1])); 
console.log(lab1.questionTwo([1, '1', 1, '1', 2])); 
console.log(lab1.questionTwo([3, 'a', 'b', 3, '1'])); 
console.log(lab1.questionTwo([0, '0', 'o', 0, '0','o'])); 
console.log(lab1.questionTwo([])); 


//Question three test cases
console.log("Question 3 result");
console.log(lab1.questionThree(["cat", "act", "foo", "bar"])); 
console.log(lab1.questionThree(["race", "care", "foo", "foo", "foo"]));
console.log(lab1.questionThree(["race", "care", "foo", "foo", "foo","cat", "act", "foo", "bar"]));
console.log(lab1.questionThree(["foo", "bar", "test", "Patrick", "Hill"]));
console.log(lab1.questionThree([])); 


// Question four test cases
console.log("Question 4 result");
console.log(lab1.questionFour(0, 3, 2)); 
console.log(lab1.questionFour(1, 3, 2)); 
console.log(lab1.questionFour(2, 5, 6));
console.log(lab1.questionFour(6, 0, 3));
console.log(lab1.questionFour(2, 5, 0));
