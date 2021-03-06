	LOOP
1.do-while
2.while
3.for
4.for in
5.for of
6.for each
7.map
8.reduce



1.for loop

for(i=0; i<10; i++)
{
    console.log(i);
}

OUTPUT:
0
1
2
3
4
5
6
7
8
9

2.while loop
let x=20
while(x<=20)
{
	console.log(x)
	x++;
}

OUTPUT:
	20
	20

Mode operator
x=x+1
x=x-1
x+=1
x-=1
x*=1
x/=2  - quatient
x%2  - remainder

3.do while loop:
let x=20
do{
	console.log(x);
	x--;
}while(x>20)

OUTPUT:
20
20

Home work:
1) Initialize array
2)Run a loop(i=0;i<=x.length; i++)
	console.log(x[i])
3)print the value for each array item. console.log(x[i])



4.For...in
Array:---
	let arr=[1,2,3,4]
	for(let i in arr){
		console.log(arr[i]);
	}

	OUTPUT:
	1
	2
	3
	4

Object:--
	let obj={ FirstName: "Vijay", LastName:"Mane", Age: 23 , email: "vijay951mane@gmail.com" };
	for(let key in obj){
    		console.log(key+ " : " +obj[key] + " ");
	}
                
	OUTPUT:
	FirstName : Vijay 
	LastName : Mane 
	Age : 23 
	email : vijay951mane@gmail.com

11/01/2022
/*
for(let key in person){
    if(typeof person[key] ===Array){
        for(let key in person[key]){
            console.log(key)
        }
    }
    else{
        console.log(person[key])
    }
}

*/

let student= { firstName: 'Vijay', lastName: 'Mane', hobbies:['pencil sketch','drawing'], phone: '09-8105361679'}
for(let key in student){
    if(Array.isArray(student[key])){
        for(let i in student[key]){
            console.log(student[key][i])
        }
    }
    else{
        console.log(student[key])
    }
}

output:
	Vijay
	Mane
	pencil sketch
	drawing
	09-8105361679

Home Work:


let student= { firstName: 'Vijay', lastName: 'Mane', hobbies: 'pencil-sketch, drawing', phone: '09-8105361679'}
for(let key in student){
    if(Array.isArray(student[key])){
        for(let i in student[key]){
            console.log(student[key][i])
        }
    }
    else{
        console.log(key+ " : " +student[key]);
    }
}

OUTPUT:

firstName : Vijay
lastName : Mane
hobbies : pencil-sketch, drawing
phone : 09-8105361679

OR

let student= { firstName: 'Vijay', lastName: 'Mane', hobbies: 'pencil-sketch, drawing', phone: '09-8105361679'}
for(let key in student){
    if(Array.isArray(student[key])){
//         for(let i in student[key]){
//             console.log(student[key][i])
//         }
    }
    else{
        console.log(key+ " : " +student[key]);
    }
}

OUTPUT:
Home Work:- Q)  key and index:-ans
	
firstName : Vijay
lastName : Mane
hobbies : pencil-sketch, drawing
phone : 09-8105361679

let student= { firstName: 'Vijay', lastName: 'Mane', hobbies:['pencil sketch','drawing'], phone: '09-8105361679'}
for(let key in student){
    if(Array.isArray(student[key])){
        for(let i in student[key]){
            console.log(student[key][i])
        }
    }
    else{
        console.log(key+ " : " +student[key]);
    }
}

Q.key and index:-
output: 

firstName : Vijay
lastName : Mane
pencil sketch
drawing
phone : 09-8105361679





