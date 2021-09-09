function distruct () {
    return [ 1, 2,3,4,5];
}

//apply the distructing features in the same as above 
// ...d is rest syntax
//array destructing
const [a , b , c ,...d] = distruct();
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Nested array distructing

function hi () {
    return[
        1,2,4 ,[10 ,12 ,14]
    ];
}

let [n1 , n2 , n3, [nn1 , nn2 , nn3]] = hi();

console.log(nn1);


// array distructing application

// 1. swapping
let p= 10 , q=20;
[p ,q] = [q,p]
console.log(p, q) //the value of a =20 and b=10

//2. function that returns multiple value

function  value1(x , y){
    return[
        x+y,
        x/y,
        x-y,
        x*y
    ];
}
let [sum , div,sub ,mul] = value1(4 , 2);

console.log(sum , div ,sub ,mul);

//object distructing

const person = {
    firstName : "Md",
    lastName : "Nooruzzaman",
    age1 : 18
}

let {firstName , lastName , age1 } = person;
console.log(firstName , lastName , age1); //This will give output like Md Nooruzzaman 18

//distructing function arguments
const person1 = {
    fn : "md",
    ln : "nooruzzaman"
}
const display = ({fn , ln}) => console.log(`${fn} , ${ln}`);

display(person1);


