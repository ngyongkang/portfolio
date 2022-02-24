import React from "react";
import { Link } from "react-router-dom";

//Header component is similar to a navbar however, it can retain session information.

//By adding the children property we will be changing this component to a high order version.
//This is to allow the Header to be added to multiple components easier.
const Header = ({ children }) => {
    //Custom styling for this component.
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };

    return (
        //Recommended to use the Link library from react-router-dom instead
        //as it allows tracking activity of the user.
        <div>
            <div>
            <h3 style={style}><Link to='/'>Home</Link></h3>
            <h3 style={style}><Link to='/jokes'>Jokes</Link></h3>
            </div>
            {children}
        </div>
        
        
        //Using anchor tags can achieve the same output however,
        //It is highly not recommended as React does not work well
        //with the anchor tags. By using this approach you will be
        //restarting the state of the session each time a link is clicked
        //Therefore, removing any tracking activity that was done on the site.
        //Do take note this is very important as it would look as if the user
        //entered the website for the first time. 

        //Can be tested by adding a console.log in the render of the App component.
        // <div>
        //     <h3 style={style}><a href='/'>Home</a></h3>
        //     <h3 style={style}><a href='./jokes'>Jokes</a></h3>
        // </div>
    )

}

export default Header;