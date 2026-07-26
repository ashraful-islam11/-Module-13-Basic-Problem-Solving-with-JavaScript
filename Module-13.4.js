// todo:            Module no -13.4             topic: String Problems — Reverse a String(Already covered on module) & Count Vowel.

/**
 * todo:    
 *  *  আমরা প্রতিটা problem কে , দুইটা step e ভাগ করে করব:
 *  1. without function: 
 *  2. with use a function: 
 * 
 */

//* problem no : 5.                 topic:  reverse a string: 
console.log('~~~~~~~~~~ with out Function: ');

const str = 'I Love Bangladesh';

let array = '';
for( let i = str.length-1 ; i >= 0;  i--){
    console.log(`${i} ==> ${str[i]}`);
    let later = str[i];

    array+= later ;
    console.log(array);   
}



const name ='Ashraful islam ';
let mtString = '';

for( let n = name.length-1 ; n >= 0; n--){
    console.log(`${n} ==> ${name[n]}`);
    let word = name[n];
    mtString+= word;
}

console.log(mtString);

// step: 2 
console.log('~~~~~~~ with use a function : ');


function nameRevers (name){
      let empty = '';
      for( let nm = name.length-1; nm >=  0; nm--){

             empty += name[nm];

      }
      return empty;
}


const nameIsRevers = nameRevers('My name is Ashraful islam');
console.log(nameIsRevers);



// todo: problem no - 6.  count vowels in a string. 

// step : 1. with out a function :  

const heroFC = 'Programming hero fc';
let vowel = 'aeiou';

let count = 0;
for( let hero = 0; hero <= heroFC.length ; hero++){
      const heroValue = heroFC[hero];
      console.log(` ${hero} ===> ${heroValue} `);

      if(vowel.includes(heroValue)){
        console.log('vowel');
        count++;
      }

}
console.log('count ===>', count);


// step : 2. with use Function :  topic: count vowels  in a string 


function stringName (variableName){
    let vowelLater = 'aeiou';
    let count1 = 0;
    
    for( let word = 0; word <= variableName.length; word++){
        console.log( word,'word is ===> ' , variableName[word]); 
       let variableLoop = variableName[word];

        if( vowelLater.includes( variableLoop)){
                console.log('vowel hobe');
                count1++;
        }
    } 
    return count1;  
}

const variableName = stringName( 'arithmetic operator');
console.log(variableName);