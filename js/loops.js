'use strict';

/*Pętla for*/
    
    for ( var i =0; i<4; i++){
    console.log(i)
}


for ( var i =4; i>0; i--){
    console.log(i)
}


/*Pętla while*/

var i=0;
while (i < 10) {
console.log ("Pętla while [i= "+ i +"]");
i++;
}


/*Pętla do...while*/

var iter =20;
do {
    console.log (iter);
    iter++;
} while (iter < 10)
    
    
/*Przerywanie pętli- break*/
    
var a = 0;
while (a <10) {
    console.log(++a);
 if (a ==3) {
     break;
 }
    
}
