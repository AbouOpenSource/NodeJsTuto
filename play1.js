const name='Max'
let age=29;
console.log(name);
const hasHobbies=true;
const summarizeUser=(userName, userAge, userHasHobby) => {
	return ('Name is '+userName+' age is '+ age + ' and the user has hobbies'+ userHasHobby) ;
}

// const add= (a,b)=> a+b;
	// const addOne =(a)=>a+1; 
const addRandom=()=>1+3;

console.log(addRandom(1));
// console.log(addOne(1));
// console.log(add(1,2));
console.log(summarizeUser(name, age , hasHobbies)); 
