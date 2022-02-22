//index.js is not a default file the index is a naming convention for this project default file.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//CSS can be imported directly to the javascript by importing the css file locally.
import './index.css';

ReactDOM.render(<App/>,document.getElementById('root'));



//Example class and inheritance example.
/*
class Animal
{
    constructor(name,age) 
    {
        this.name =name;
        this.age =age;
    }

    speak()
    {
        console.log('I am', this.name, 'and i am', this.age, 'years old');   
    }
}

const animal1 = new Animal('Puma',32);
animal1.speak();

console.log(animal1);

class Lion extends Animal
{
    constructor(name,age,fur,speed)
    {
        super(name,age);
        this.fur = fur;
        this.speed = speed;
    }

    roar()
    {
        console.log("ROARRRRRRR I HAVE", this.fur, 'fur , and I can run', this.speed, 'miles an hour!');
    }
}

const lion1 = new Lion('Simba',20,'brown',25);
lion1.speak();
lion1.roar();
console.log(lion1);
*/