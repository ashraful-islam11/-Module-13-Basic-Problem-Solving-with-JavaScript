// todo:   Module no -13.7              topic:  Array Problems — SumAverage & Filter by Condition



/**
 * todo:      আমরা প্রতিটা problem কে , দুইটা step e ভাগ করে করব:
 **  1. without function: 
 **  2. with use a function: 
 */

 // todo:   Problem no : 11.        topic:  Sum an average of an Array      :

    // step :  1.   with out use a Function : 

    let sum = 0;
    let average =0;
    
    let arrays =[ 12, 34, 55, 66, 77, 6];

    for( let singleElement = 0; singleElement < arrays.length; singleElement++ ){
          let allElements = arrays[singleElement];
        //   console.log(allElements);

          // all element sum: 
           sum  += allElements;
        //    console.log(sum); 
        average = sum / arrays.length;
                
        
    }
   console.log(sum);
    console.log(average);



    //  step: 2.   with use is function: 

    function userGives ( data){
        let needToSum = 0; 
         let willAverage = 0;

        for( let n = 0; n < data.length; n++){
            let  userData = data[n];
            // sum kora hoiche. 
            needToSum += userData;
            // console.log(needToSum);
            willAverage = needToSum / data.length;
        }
        console.log(needToSum);
        return willAverage;

    }

    const userCall = userGives( [12, 33, 44, 55, 77, 90]);
    console.log(userCall);


    //todo :            problem no : 12.    topic: filter number greater than a value ; 
    
    console.log('filter number greater than a value');

    // step: 1.   with out use a function: 
    let productPrise =[  50, 40, 85, 65, 67, 69, 89, 90, 95, 100];
    let minBuy= 50;
    let filterArray = [];

    for(  let product = 0;  product < productPrise.length;   product++  ){

          let allProductInHere = productPrise[product];
          console.log(allProductInHere);

          if( allProductInHere > minBuy){
              filterArray.push(allProductInHere);
          }

    }
    console.log(filterArray);


    // step - 2         with use a function .

    function allMembersAge  (ages){
        let filterAge = [];
        let isAdult = 18 ;

        for( let  age = 0;  age < ages.length ;  age++){
            let memberAge = ages[age];

            if( memberAge >= isAdult){
                filterAge.push(memberAge);
            }
        }
        return filterAge;
    }


    const userGivesAge = allMembersAge([12, 23, 45, 65, 3, 21, 12, 17, 16, 32, 13, 18]);
    console.log(userGivesAge);

