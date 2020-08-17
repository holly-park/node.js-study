let count:number;
let i:number;

count=0;
for(i=3; i<100; i=i+3){
   if(i%3==0){
       count++;
   }
}

console.log(count);