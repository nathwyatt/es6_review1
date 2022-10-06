var x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script
var a = 10; 
var b = 20; 
console.log(window.a); 
console.log(window.b); 
 
const person={
    name:"thierry",
    age:25
}
person.name="wyatt"
console.log(person.name)
console.log(person.age)
class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}
let person = new Person(' Aime Wayatt');
console.log(person); 

person.setName(' Aime Thierry');
console.log(person.getName()); 
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}
console.log(text)
class River
{
    constractor(name)
    {
        this.name=name
       
    }
}
let river = new River('Nyabarongo')
console.log(river)
class Polygon {
    constructor(name,side) {
      this.name = name;
      this.side=side;
    }
  }
  
  const poly1 = new Polygon('pentagon',5);
  
  console.log(poly1);
class Person
{
  constructor(name)
  {
    this._name=name
  }
  get name()
  {
    return this._name
  }
}
let myperson = new Person('Aime Wyatt')
console.log(myperson.name)

let meeting={
  attendees:[],
  add (attendee)
  {
    console.log(`${attendee} joined the meeting.`)
    this.attendees.push(attendee);
    return this
  },
  get latest()
  {
  let count=this.attendees.length;
  return count==0? undefined: this.attendees[count-1]
  }
}
  meeting.add('Thierry').add('Aime').add('wyatt');
  console.log(`the last attender of the meeting is ${meeting.latest}.`)


  let name = 'fullName';
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get[name]() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
let myNAME=new Person('NIZEYIMANA Thierry')
console.log(myNAME.fullname)
class Animal { 
  constructor(legs) { 
   this.legs = legs;  
  }
  walk() { 
  console.log('walking on ' + this.legs + ' legs')
 } 
}
class Bird extends Animal { 
  constructor(legs) {
   super(legs); 
  } 
  fly() {
   console.log('flying'); 
 } 
 }
 
 let bird = new Bird(2);
 bird.walk(); 
 bird.fly();
 
let myname='lastname'
const name={
  firstname:'NIZEYIMANA',
  middlename:'aime',
  [myname]:'thierry'
}
console.log(`myname is ${name.firstname}  ${name.middlename}  ${name.lastname}`)

// inhertance

class Student
{
  constructor(name)
  {
    this.name=name;
  }
 sname()
 {
  console.log('this is student')
 }
}
class Urstudent extends Student
{
  constructor(name ,reg_number)
  {
    super (name);
    this.reg_number=reg_number

  }
  display()
  {
    console.log('this is ur student')
  }
}
let student= new Urstudent('thierry')
console.log(`${student.name} and  ${student.sname()}`)
let add= function(a,b)
{
  return a*b
}
let product = add(10,20)
console.log(`the product is ${product}`)
let add = (x, y) =>{ return x + y}
console.log(add(10, 20))

let names=['aime','thierry']
let length= names.map(name=>(name.length))
console.log(length)

let logDoc = () => console.log('welcome');
logDoc();
