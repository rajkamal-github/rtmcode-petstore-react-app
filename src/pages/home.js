import { React, Component } from 'react';
import Pets from '../pages/pets';
import services from '../services/services';

class Home extends Component {

    constructor(props){
        super(props);

        let pets = [{
            name : 'Dog'
        }]
        this.state = {
            pets : pets
        }
    }

    componentDidMount(){
        services.GetPets()
        .then((data) => {
            this.setState((prev) => {
                pets: prev.pets.push(data)
            })
        });
    }

    render(){
        // console.log(this.state.pets);
        return (
            <div>
                <p>Home Page</p>
                <Pets props={this.state.pets} />
            </div>
        );
    }
}

export default Home;