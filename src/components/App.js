import React, {Component} from "react";
import Projects from './Projects';
import Social_Media from "./Social_Media";
import profile from "../assets/profile.png";
import Title from "./Title";

class App extends Component
{
    //Make sure to call super or else code will break.
    state = {displayBio: false};
    

    /* 
    constructor()
    {
        super();
        this.state = { displayBio: false }; this line does the same thing as the line above.
        excepts that it is locked within this constructor method. The above is a better practice
        by initiaising a variable for the entire class to use. Basically, a global variable.

        //console.log('Component this', this); line to show info on the console on the web gui.

        //Line will bind an object to a method outside to allow use of the object methods and variables.
        this.toggleBio = this.toggleBio.bind(this);
    }
    */
    /*
    readMore()
    {
        Bad practice to alter a state directly, do not do this. ***
        NEVER DIRECTLY MODIFY A REACT STATE!!!!. ******
        THE FOLLOWING LINE IS WRONGG
        this.state.displayBio = true; <-----------

        The reason why this is a bad practice is because the
        setState method re-calls the render() method at the end of setState(),
        This is important as it allows the application to render the new updated
        values in the state while just updating the values directly will not 
        render the new values in leaving the appearance of the website unchanged.
        

        this.setState({displayBio: true});
        console.log('readMore this', this);
    }
    */

    /*
    * Note class methods don't have logic to create their own objects Therefore, 
    * class methods written this way is essentially a convenient way to click various methods
    * to fire like a script.
    * Important: It is not an object or class by itself. **
    * Can link methods to objects variables above by typing = () =>
    */
    toggleBio = () =>
    {
        /*
        * This line of code allows the object state to change to the opposition option of it's
        * currently stored option. For example, if displayBio state is false, the following
        * code would change it to true and vice versa. 
        */
        this.setState({displayBio: !this.state.displayBio});
    }
    //The line below can be put into where the <Title/> is to
    //test the componentWillUnmount method.
    //{this.state.displayBio ? <Title/>:null}
    render()
    {  
        return(
            <div>
                <img src={profile} alt='profile' className="profile"/>
                <h1>Hello!</h1>
                <p>My name is Ng Yong Kang.</p>
                <Title/>
                <p>I hope to learn valuable skills from this ReactJS course. :)</p>
                {
                    this.state.displayBio ? (
                    <div>
                        <p>I live in Singapore and I just got hired as a programmer.</p>
                        <p>My main language is Java and I am currently learning React JS.</p>
                        <p>I don't really like coding much but these are some things I do like</p>
                        <p>gaming, anime, kdrama, my family and of course girls</p>
                        <button onClick={this.toggleBio}>Show less</button>
                    </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleBio}>Show more</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/> 
                <hr/>
                <Social_Media/>
            </div>
        )
    }
}

/*
* The export default line allows other files in the codebase to access this component.
* By delcaring this App component as the default export of the file. Other files will 
* be able to import the app just like we imported react without the curly braces from
* the react module.
*/
export default App;