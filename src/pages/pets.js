import { React, Component } from 'react';
import Pet from './pet';

const Pets = (props) => {
    console.log('Pets components');
    if (props){
        console.log(props.pets);
        return (
            props.pets.map(i => {
                <Pet props={i} />
            })
        )
    }
    else{
        return (
            <div>
                <p>No Pets</p>
            </div>
        )
    }
}

export default Pets;