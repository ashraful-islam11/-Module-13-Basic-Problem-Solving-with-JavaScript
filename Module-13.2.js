// todo:        Module no - 13.2            topic: Number Problems — EvenOdd Checker & Sum of a Range.
// এই Module তে আমরা , ১৫ টা problem solve করব, :

//*   problem 1 :   check if a number is even or odd:  ( number % 2 === 0 ) .
/** 
 *  আমরা প্রতিটা problem কে , দুইটা step e ভাগ করে করব:
 *  
 * 1. without function: 
 * 2. with use a function: */

//* step : 1 ---- with out a function :
console.log('~~~~~~~ with out a function ~~~~~~~~~ ');

let number = 11;        // আমরা value change করে দেখতে পারি। 

 if(  number % 2 === 0 ){

     console.log(`${number} is a even number `);
}
else{
      console.log(`${number} is a odd number `);
    
 }


 //* step: 2 ---> with use a function:

 console.log('~~~~~~~~~ with use a function ~~~~~~~~~');
  function checkEvenOrOdd ( data){

            // condition check : 
        if( data % 2 === 0 ){
            let even = console.log(`${data} is a even number`);
            return even;
        }
        else{
            let odd = console.log(`${data} is a odd number`);
            return odd;
        }
   }

    checkEvenOrOdd( 20 );
    checkEvenOrOdd( 99 );
    checkEvenOrOdd( 100);
    checkEvenOrOdd( 88 );
   






    //todo:  problem no - 2. :   sum of a range of number ( 1 - 7).
    
    //* step : 1 ---- with out a function :
console.log('~~~~~~~ with out a function ~~~~~~~~~ ');

    let sum = 0 ;
    for( let num = 1; num <= 7; num++){
        console.log('num ----> ', num);

        // sum of range: 
          sum = sum + num;
         console.log(sum);
    }


     //* step: 2 ---> with use a function:

 console.log('~~~~~~~~~ with use a function ~~~~~~~~~');

 function rangeOfSum ( range){

        let sumRange = 0;
     for( let  i = 1; i <= range; i++){
         console.log('i -----> ', i );

          sumRange = sumRange + i; 
          console.log(sumRange);


    }
    return sumRange;
 }

rangeOfSum(7)
rangeOfSum(8)
rangeOfSum(20)
    
  
 

