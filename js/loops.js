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
console.log("Pętla while [i = "+ i +"]");
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

/*Preinkremetacja vs Postikrementacja*/

for (var i=1; i<4;){
//    console.log(++i);
    i = i + 1;
    console.log(i);
}

console.log('______');
    for (var i=1; i<4); {
//    console.log(i++)
      console.log(i);
      i = i +1;
}


/*Przeskakiwanie do kolejnej iteracji*/

for (var b = 0; b <6; ++b){
    
    if (b ==3) {
        continue;
    }   else {
            console.log("--");
    }
}

