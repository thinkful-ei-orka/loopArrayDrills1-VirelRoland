const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;

function average(){ 
    numList1.forEach(function(x){
         sum += x;
    })
    console.log(sum/numList1.length);

}

average()