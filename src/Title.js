import React, {Component} from "react";

const TITLES = [
    'a software engineer',
    'an anime lover',
    'interested in all things nerdy'
];

class Title extends Component{
    state = {titleIndex: 0};

    //Example compoenetDidMount() method
    componentDidMount(){
        console.log('Title component has mounted');

        //Using local method.
        this.animateTitles();
    }
    //Local method to animate titles.
    animateTitles = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({titleIndex});
        },4000);
    }

    render(){
        const title = TITLES[this.state.titleIndex];
        return(
            <p>I am {title}</p>
        )
    }
}

export default Title;