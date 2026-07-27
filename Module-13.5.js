// todo:         Module no - 13.5      Topic: String Problems — Palindrome Check & Count Words

/**
 * todo:      আমরা প্রতিটা problem কে , দুইটা step e ভাগ করে করব:
 **  1. without function: 
 **  2. with use a function: 
 * 
 */



 // todo: Problem no - 7. check if a string is a palindrome.

 //* step: 1. with out use  function : 
 console.log('~~~~~~~~~~~~~ with out use function: ');

//  let stringName = 'madam';
//  let emptyString = '';

//    for( let word = stringName.length-1; word >= 0; word--){
//        let reverseRow = stringName[word];
//        console.log(`${ word} ==>  ${reverseRow}` );

//        emptyString += reverseRow;
//        console.log(emptyString);
//    }
//    if( emptyString === stringName){
//         console.log(true);
//         console.log(`${stringName} is a palindrome string`);
//        }
//        else{
//         console.log(false);
//         console.log(`${stringName} is not a palindrome string`);

//        }


 //* step: 2.  with out use  function : 
 console.log('~~~~~~~~~~~~~ with use a function: ');

 function palindromeString ( str){
     let reverseResult ='';
     for( let i = str.length-1; i>= 0; i--){
        console.log(`i ===> ${i}`);
        let ourMainSentence = str[i];
        reverseResult += ourMainSentence;
      
        // console.log(reverseResult);
     }
   
     if( str === reverseResult){
        
        console.log(true);
     }
     else{
      console.log(false);   
      }

      return reverseResult;
 }

 const palindromeCheck = palindromeString('mam');
 console.log(`${palindromeCheck}`);

 const palindromeTest = palindromeString('step on no pets');
 console.log(`${palindromeTest}`);



 // todo:       Problem no -8.       topic:   count words in a sentence. 

 // step: 1.   with out a function :
 console.log(`count words in a sentence.`);

  let sentence = 'I love you Bangladesh';
  
  let splitWordArray = sentence.split(' ');
   console.log(splitWordArray.length );


   // step: 2 . with use a  function. 

   function splitSentence ( countWords){
     let splitCountWords = countWords.split(' ');
     console.log(` (${countWords}) is word count - ${splitCountWords.length}`);
   }

   let countryCount ='Bangladesh is my home land';
   splitSentence( countryCount)
  