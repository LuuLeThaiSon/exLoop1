// debugger
var a=0,b=1,sum,sum2=0,count;
sum=a+b;

for (count=0;count<=2;count++) {
     a=b; //a 1 
     b=sum; //b 1
     sum=a+b; //sum: 2
     sum2+=a; //sum2: 2  
     console.log(count); //count: 1

}

console.log(sum2);

// 0 1 1 2 3 5 8