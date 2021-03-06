import React from 'react';
import PROJECTS from '../data/projects';

//Stateless functional syntax being used.
const Project = props => {
    //console.log('this.props',props);
    
    const {title, image, description, link} = props.project;

    return(
        <div style = {{display:'inline-block', width:300, margin: 10}}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{width:200, height:120}}/>
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )
}

//Converted to stateless functional component as the function does not use state.
const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
            <div>
            {
                PROJECTS.map( PROJECT => {
                    return(
                    <Project key={PROJECT.id} project={PROJECT}/>
                    );
                })
            }
        </div>
    </div>
)

export default Projects;

/*
    Hard code way to use attributes inside an array. (Static Approach)
    Not recommended for multiple entries and cannot scale.
    <div>{PROJECTS[0].title}</div>
    <div>{PROJECTS[1].title}</div>
    <div>{PROJECTS[2].title}</div>

    Conversion from an array to JSX array. (Dynamic Approach) Read up **
    
    Using the map function we can convert our global array (PROJECTS)
    to a JSX array. We then use the "Callback" Function to return
    an object back in div format with the selected content we want to display 
    for each object in the array.

    Recommended for scalability and multiple entries.

    Explanation by Video:
    So let's replace this with an overall pair of curly braces where we can write some logic within the
    JSX.
    We're gonna use the map function on the projects array to take the original array and transform it
    into a new one that consists of a bunch of JSX objects.
    So use Projects.map.
    We can now use a map function to transform the project data items to individual pieces of JSX to
    render.
    So with that we have a callback function to pass into the map and the actual parameter to the callback
    function is each project one at a time.
    So it's gonna use the first project and then the second project and the third project firing this callback
    function one at a time.
    And for each item now let's have the return statement.
    And this is going to return a div overall that renders the project object's title.
    So have a pair of curly braces and then render the project title and this code is equivalent to what
    we had before.
    For each of the individual project items within the project array we're turning each one into a div
    that consists of its title right.

    {
        PROJECTS.map( PROJECT => {
            return(
            <div>{PROJECT.title}</div>
            );
        })
    }

    Now if you open up the console you're gonna notice that there is this warning saying that each child
    in an array or iterator needs a key property this is essentially React telling us that it needs a way
    to distinguish JSX that's generated by in that function that way under the hood it can optimize
    the rendering of the JSX.

    by adding the key={PROJECT.id} to the div located inside the return statement above we can
    retrieve the id for the objects.

    JavaScript destructuring syntax allows us to extract data from arrays, objects, maps and 
    set them into new, distinct variables. Destructuring allows us to extract multiple properties, 
    or items, from an array??? at a time.
    
    The following is an example of the destructuring syntax:

    const {title, image, description, link} = this.props.object;
    
    This equals to the following basic syntax:

    const title = this.props.project.title;
    const image = this.props.project.image;
    const description = this.props.project.description;
    const link = this.props.project.link;

*/