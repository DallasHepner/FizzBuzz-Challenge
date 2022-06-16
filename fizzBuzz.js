// Write your solution below this line:
/*
Plan: loop that checks first for 3 & 5, then just 3, then just 5.
If it passes all then just print the number.
*/

for (let i = 1; i < 51; i++){

if (((i%3)===0) && ((i%5)===0)){
    console.log(`fizzbuzz`);
}
else if ((i%3) === 0){
    console.log(`fizz`);
}
else if ((i%5)===0){
    console.log(`buzz`);
}
else{
    console.log(i);
}
}