import React, {Component} from 'react';

import Form from "../Form";

export default class App extends Component {

    state = {
        mounted: true
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            mounted: false
        })
    };

    render() {

        const { mounted } = this.state;

        return (
            <div className="app">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {mounted && <Form onSubmit={this.handleSubmit}/>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}