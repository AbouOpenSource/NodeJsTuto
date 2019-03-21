const person = {
	name: 'Max',
	age: 29,
	// greet: function () {
	// 	console.log('Hi, i am '+ this.name);
	// }
	greet(){
		console.log('Hi , I am '+ this.name);
	}


};




// const printName = (personData)=>{
// console.log(personData.name);	
// }
// printName(person);

const printName = ({ name })=>{
console.log(name);	
}
//printName(person);

const { name, age } = person;


console.log(name, age);






// const copiedPerson = {...person};
// console.log(copiedPerson)
 
// // console.log(person);
// // person.greet();


 const hobbies = [ 'Sports', 'Cooking' ];

const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);









// for(let hobby of hobbies){
// 	console.log(hobby);
// }

// console.log(hobbies.map(hobby =>'Hobby: '+ hobby));
// console.log(hobbies);
// hobbies.push('Programming');
// const copiedArray = hobbies.slice();

// const copiedArray =[...hobbies ];
// console.log(copiedArray);

// const toArray=(...args)=>{
// return args;
// }


// console.log(toArray(1,2,3,4))