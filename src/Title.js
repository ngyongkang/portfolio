import React, {Component} from "react";

const TITLES = [
    'a software engineer',
    'an anime lover',
    'interested in all things nerdy'
];

class Title extends Component{
    state = {titleIndex: 0};

    //Example componentDidMount() method
    componentDidMount(){
        //console.log('Title component has mounted');

        //Using local method.
        this.animateTitles();
    }

    //Example componentWillUnmount() method
    componentWillUnmount(){
        //console.log('Title component will unmount!');

        //Helps to clear the queued timer and prevent memory leaking.
        clearInterval(this.titleInterval);
    }

    //Local method to animate titles.
    animateTitles = () => {
        //Setting setInterval method to a local variable.
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({titleIndex});
        },4000);

        //console.log('thistitleInterval',this.titleInterval);
    }

    render(){
        const title = TITLES[this.state.titleIndex];
        return(
            <p>I am {title}</p>
        )
    }
}

export default Title;