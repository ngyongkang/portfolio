import React, {Component} from "react";

const TITLES = [
    'a software engineer',
    'an anime lover',
    'a nerdy boy'
];

class Title extends Component{
    state = {titleIndex: 0};

    render(){
        const title = TITLES[this.state.titleIndex];
        return(
            <p>I am {title}</p>
        )
    }
}

export default Title;