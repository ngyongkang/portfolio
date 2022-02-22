import React, {Component} from "react";

const TITLES = [
    'a software engineer',
    'an anime lover',
    'interested in all things nerdy'
];

class Title extends Component{
    state = {titleIndex: 0, fadeIn: true};

    //Example componentDidMount() method
    componentDidMount(){
        //console.log('Title component has mounted');
        
        /*The line below sets the timer of the created fading effect.
         *Using the setTimeout method we can change the state of an object
         *after the given time has finished. 
        */
         this.titleTimeout = setTimeout(() => this.setState({fadeIn:false}),2000);
        //Using local method.
        this.animateTitles();
    }

    //Example componentWillUnmount() method
    componentWillUnmount(){
        //console.log('Title component will unmount!');

        //Helps to clear the queued timer and prevent memory leaking.
        clearInterval(this.titleInterval);
        clearTimeout(this.titleTimeout);
    }

    //Local method to animate titles.
    animateTitles = () => {
        //Setting setInterval method to a local variable.
        this.titleInterval = setInterval(() => {
            /*The following line is used to change the number inside
             *the titleIndex by 1. The modular (%) portion is to
             *prevent the index from going out of bounds.
            */
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            /*
             *By using the setstate method on the titleIndex variable 
             *we are able to cycle through the titles in the TITLES array by 
             *changing the number inside the variable.
             *
             *By setting the fadeIn variable to true everytime the state
             *changes the fadeIn effect will carry out essentially bringing
             *back the object with a fade in effect.
            */ 
            this.setState({titleIndex,fadeIn:true});
            this.titleTimeout = setTimeout(() => this.setState({fadeIn:false}),2000);
        },4000);

        //console.log('thistitleInterval',this.titleInterval);
    }

    render(){
        const {fadeIn, titleIndex} = this.state;
        const title = TITLES[titleIndex];
        return(
            //Adding the className to the paragraph with the created 'fade' css
            //We now have a fading effect on our title !! ^^
            <p className={fadeIn ? 'title-fade-in':'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;