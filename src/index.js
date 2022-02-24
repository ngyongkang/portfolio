//index.js is not a default file the index is a naming convention for this project default file.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Jokes from './components/Jokes';
//This import library allows the use of components as other pages. ** Important as
//this library is needed to have multiple pages on your React Application.  
import {Router, Switch, Route} from 'react-router-dom';
//library to allow the creation of a "history" object. ** Important as well
//because you need a history object to keep track of a user's activity on the site
//without a history object the router code will not work as well because it cannot
//track what is going on when a user enters the web application.
import createBrowserHistory from 'history/createBrowserHistory';
//CSS can be imported directly to the javascript by importing the css file locally.
import './index.css';

ReactDOM.render(
    //Don't have to create a history object if your only using it once. Can directly
    //apply method in the history keyword.
<Router history={createBrowserHistory()}>
    <Switch>
        {
        //By only putting the "exact" keyword we are actually putting exact={true}
        //as that is the keyword's default.
        }
        <Route exact path='/' component={App}/>
        <Route path='/jokes' component={Jokes}/>
    </Switch>
</Router>,
document.getElementById('root'));

//Under the hood example on how fetch method works.
//A promise can be ues to resolve a process before doing other processes or 
//use to catch errors that happen during that process.
//This is how a fetch method does it's work behind the scenes.
/*
new Promise ( (resolve, reject) => {
    return reject(new Error('No bears'));
    
    setTimeout(() => {
        resolve('Bears Battlestar Galactica');
    },2000);
})
.then(quote => {
    console.log(quote);
})
.catch(error => console.log('error', error));
*/


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