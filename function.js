console.log('John')

let sayHello=function(name){
    console.log(`Hello ${name}`);  
}
sayHello('john');

let fullNameMaker=function(firstName,lastName){
    console.log(`Full name is ${firstName+' '+lastName}.`);

}
fullNameMaker('Rahul','Kumar');

let adder=function(a,b){
    return a+b;
}
 let y=adder(15,33)
 console.log(y)

 let multiplyer=function(a,b){
     let z=a*b;
     console.log(`Returned the value of z=${z}.`)
     return z     
 }
 let q=multiplyer(4,8)
 console.log(q)
 
