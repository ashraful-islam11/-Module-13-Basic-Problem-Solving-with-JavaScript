// todo:            Module no -13.8             topic: Object Problems — Loop an Object & Find a Value

/**
 * todo:      আমরা প্রতিটা problem কে , দুইটা step e ভাগ করে করব:
 **  1. without function: 
 **  2. with use a function: 
 */

 // todo:      problem no - 13.       topic: Loop through an Object's properties. 
    
 let monitor = {
    color: 'black',
    brand: 'hp',
    size: 24,
    isSmart : true, 
    prise: 20000
 }


 // step:  1.  for in use korte pari: 
 for( let keys in monitor){
     let monitorKeys = monitor[keys];
     console.log(keys, ': ', monitorKeys);
 }


 // step: 2. Object.keys dot notation: and for loop :.
 console.log('Object.keys diye problem solve');

  let myMonitorKeys = Object.keys(monitor);
//   console.log(myMonitor);
for( let i =0 ;  i< myMonitorKeys.length; i++){
       let key = myMonitorKeys[i];

       console.log(key, ':', monitor[key]);
}

// step: 3.   amra caile , age Object.keys diye keys gulo ke, array baniye tarpore, for of loop use .
 console.log('~~~~~~~ step 3 ~~~~~~~~');
let arrayKeys = Object.keys(monitor);
console.log(arrayKeys);

for( let keysIndex of arrayKeys){
      let mainKey = keysIndex;
      let mainValue = monitor[keysIndex];
      console.log(mainKey, ':', mainValue);
}



// todo:   Problem - 14 .  todo:   You are given an object containing information about a student.

 /**
  ** ---- Tasks ----
   1.  Print all keys.
   2.  Print all values.
   3.  Print each key-value pair.

   4.  Count the total number of properties in the object.
   5.  Check if the object contains a property named "email".

//---- Expected input:
//  const student = {
//   name: "Utsho",
//   age: 25,
//   university: "DIU",
//   department: "CSE",
// };

// -----------------------------

//---- Expected output:
// name age university department

// Utsho 26 DIU CSE

// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Total Properties: 4
// Has Email: false
  
*/

 function objectOperation (obj){
 // 1.  print all keys :

   for( let allKeys in obj){
      console.log(allKeys);
   }


 }


  

let students = {
    name: 'Utsho',
    age: 26,
    university: 'DIU',
    department: 'CSE' ,
}

objectOperation(students);

   