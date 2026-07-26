// todo:            Module no - 13.3             topic: Number Problems — Factorial & FizzBuzz.

/**
 * todo:    problem no - 3:   Factorial of a number .
 *  *  আমরা প্রতিটা problem কে , দুইটা step e ভাগ করে করব:
 *  1. without function: 
 *  2. with use a function: 
 * 
 */

//* step : 1.  with out a function :
console.log('~~~~~~~~~ with out a function : ~~~~~~~~~~ ');


let number = 5;
let multiply = 1;

for( let i = 1 ;  i <= number;  i++){
    console.log(i);

    multiply = multiply * i;

    console.log(` ${i} of factorial is ${multiply}` );
}



 //* step: 2 ---> with use a function: factorial of a number:   

 console.log('~~~~~~~~~ with use a function ~~~~~~~~~');

 function factorialOfAnyNumber  (randomNumber){
      let factorial = 1 ;

      for( let n = 1 ;  n <= randomNumber ;  n++){
        // console.log(n);

        factorial = factorial * n;
        console.log(`${n} is factorial of  ${factorial} `);
      }

      return factorial;
 }

   factorialOfAnyNumber(5);
    console.log('\n');
   factorialOfAnyNumber(7);



/**
 * todo:    problem no - 4: 
 * *   Loop through numbers form 1 - n . if a number divisible by 3 , print - "Fizz". if a number divisible by 5 , print - "Buzz", if divisible by both, print- "FizzBuzz". otherWise print the number itself.
 * 
 *  *  আমরা প্রতিটা problem কে , দুইটা step e ভাগ করে করব:
 *  1. without function: 
 *  2. with use a function: 
 * 
 */

// 
console.log('~~~~~~~~~~ fizz buzz ~~~~~~~~~~');
// * step: 1. with out function :


console.log('~~~~~~~~~ with out a function : ~~~~~~~~~~ ');
let fizzBuzzNumber = 25;

for( let x = 1; x <= fizzBuzzNumber; x++){
    console.log(x);
    if( x % 3 === 0 && x % 5 === 0 ){
        console.log('FizzBuzz');
    }
    else if( x % 3 === 0 ){
        console.log('Fizz');
    }
    else if( x % 5 === 0 ){
         console.log('Buzz');
    }
    else{
          console.log('Number itself');
    }
}



// step : 2 . with use a function:
 console.log('~~~~~~~~~ with use a function ~~~~~~~~~');


 function FizzBuzz ( n){
      for( let y = 1; y <= n; y++){
        console.log(y);

         if( y % 3 === 0 && y % 5 === 0 ){
        console.log('FizzBuzz');
        }
        else if( y % 3 === 0 ){
            console.log('Fizz');
        }
        else if( y % 5 === 0 ){
            console.log('Buzz');
        }
        else{
            console.log('Number itself');
        }

      }
 }

 FizzBuzz(20)

