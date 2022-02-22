import React, { Component } from "react";
import SOCIALDATA from "../data/social_media";

//Converted to stateless functional component.
const Social = props => {
    //console.log('Testing for props link.', this.props);
    
    const {title,description,link,image} = props.social;
    return(
        <div style={{display:'inline-block', width:100,margin:10}}>
            <a href={link}><img src={image} alt='profile'style={{width:50,height:50}}/></a>
        </div>
    )
}

//Converted to stateless functional component with inline return. Inline return means
//One return statement in the function only.
const Social_Media = () =>  (
        <div>
            <h2>Connect with me !! </h2>
            <div>
                {SOCIALDATA.map(SOCIAL => {
                    return (
                        <Social key={SOCIAL.id} social={SOCIAL} />
                    );
                })}
            </div>
        </div>
)

//Original component class, converted to stateless functional component on top.
/*
class Social_Media extends Component  {
    render()
    {
        return (
        <div>
            <h2>Connect with me !! </h2>
            <div>
                {SOCIALDATA.map(SOCIAL => {
                    return (
                        <Social key={SOCIAL.id} social={SOCIAL} />
                    );
                })}
            </div>
        </div>
        );
    }
}
*/
export default Social_Media;