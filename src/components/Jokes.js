import React, {Component} from "react";

const Joke = ({ joke }) => {
    const {setup, delivery} = joke;

    return <p>{setup}<em>{delivery}</em></p>;
}

class Jokes extends Component {
    state = {joke: {},jokes: [] };
    
    componentDidMount() {
        fetch('https://v2.jokeapi.dev/joke/Any') //fetch function to collect data from link.
        /*The line below can be type like this ".then(response => {return response.json() })"
         *basically it's the same as returning the response but doing it "inline"
         */
        .then(response => response.json()) //Getting json response from hyperlink.
        //.then(json => console.log('json:',json)); //For checking the json response.
        .then(json => this.setState({joke: json})); //Sets the joke
        //from the fetch request you can see that there is a chain syntax,
        //that is because on the second line we are getting back a promise as well.
        //Therefore, we are are able to chain the third line because we are 
        //trying to get the values out of the "JSON" portion of the promise.
        //Similar to a nested function.?.?
    }
    //Remember to set up callback function for the new function. ** similar to declaring
    //a void function in java. public static void "Function name"
    refreshJoke = () => {
        fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(json => this.setState({joke: json}));
    }
    
    fetchJokes = () => {
        fetch('https://v2.jokeapi.dev/joke/Any?amount=10')
        .then(response => response.json())
        //.then(json => console.log('json:',json))
        //API was not in array format, was a nested object. This lead to the object becoming
        //the wrong object type as we wanted an array object we were given an object
        //which contains three different values instead. Therefore, there was an error in the code
        //which did not allow us to use the map function as it is used for arrays only.
        .then(json => this.setState({jokes: json.jokes})) //<---------------------- ** IMPORTANT** NESTED value.
        .then(() => console.log(this.state.jokes));
        
    }

    render(){
        const {setup, delivery} = this.state.joke;
        
        return(
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke}/>
                <hr/>
                <button onClick={this.fetchJokes}>Click for more jokes  </button>
                <br/><br/>
                {
                    this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke}/>))
                }
                
            </div>
        )
        //Remember not to directly call function in event handlers because as the site is 
        //rendering, the event is fired every render which would lead to a loop of
        //function fire and render.
    }
}

export default Jokes;