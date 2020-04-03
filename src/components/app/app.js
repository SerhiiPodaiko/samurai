import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from "../../services/swapi-service";

import './app.css';
import ErrorIndicator from "../error-indicator";

export default class App extends Component {

    state = {
        selectedPerson: null,
        hasError: false

    };

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onItemSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
};
