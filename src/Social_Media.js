import React, {Component} from "react";
import SOCIALDATA from "./data/social_media";

class Social extends Component {
    render(){
        console.log('Testing for props link.', this.props);
        
        const {title,description,link,image} = this.props.social;
        return(
            <div style={{display:'inline-block', width:100,margin:10}}>
                <a href={link}><img src={image} alt='profile'style={{width:50,height:50}}/></a>
            </div>
        )
    }
}

class Social_Media extends Component {
    render(){

        return(
            <div>
                <div>
                {
                SOCIALDATA.map (SOCIAL => {
                           return(
                            <Social key={SOCIAL.id} social={SOCIAL}/>
                           );
                       })
                }
                </div>
            </div>
        )
    }
}

export default Social_Media;