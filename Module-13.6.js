// todo:    Module no - 13.6            topic: Array Problems — Find the Largest & Smallest Value.



/**
 * todo:      আমরা প্রতিটা problem কে , দুইটা step e ভাগ করে করব:
 **  1. without function: 
 **  2. with use a function: 
 * 
 */

 //todo:  problem no : 9 .  Find the largest number in an Array. 
 // step : 1 .      with out a Function : 

let array = [ 500, 400, 300,];
let largest = array[0];

 for( let n = 1 ; n < array.length; n++  ){
        let currentElement = array[n];
        console.log('n ==>', currentElement);

        if( largest < currentElement){
             largest = currentElement;
        }

 }

 console.log(largest);

 // step: 2         topic:  with use a function:
 console.log('with use a function');

 function  checkLargest ( userInput ){
      let largestNumber =userInput[0];

     for( let x = 1 ; x < userInput.length;  x++){
        let currentElementOfInput = userInput[x];
        console.log('x ==>', currentElementOfInput);

            if( largestNumber < currentElementOfInput){
                largestNumber = currentElementOfInput;
            }
       }
       return largestNumber
     
 }

 const user = [11, 33, 44 , 890];
 console.log( checkLargest(user));



 // todo:   problem -10.    topic: find the smallest number in an array. 
   
 console.log('find the smallest number in an array. ');
 // step: 1.      with out a function: 

 let smallsArray = [ 599, 3444,10, 33, 44, 55, 999, 90];
 let smallest = smallsArray[0];

  for( let sm = 1;  sm < smallsArray.length;   sm++){
        // console.log(sm ,'==>' , smallsArray[sm]);
        let smallCurrentElement= smallest;

        if( smallCurrentElement < smallest){
             smallest = smallCurrentElement;
        }
  }
  
  console.log('most smallest number of ',smallest);



  // step: 2 .      with use a function : 

  function findSmallest ( userSent){
     let smallValue = userSent[0];
     for( let smStor = 1; smStor < userSent.length; smStor++){
           let ourSmallElements = userSent[smStor];

           if( smallValue > ourSmallElements){
               smallValue = ourSmallElements;
           }
     }
     
     return smallValue;
    }

    const ourResult = findSmallest([12, 33,44,55,655,3]);
    console.log( 'find the smallest number with use a function', ourResult);