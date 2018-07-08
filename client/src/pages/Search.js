import React, {Component} from "react";
import {Row, Column} from "../components/Grid";
import {Title, Input, Button} from "../components/Form";
import API from "../utils/API";

export class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            topic: "",
            startDate: "",
            endDate: ""
        };
    };
    /** Change state variables as they're being typed */
    /** This function is event based; onChange */
    handleInputChange = event => {
        /** Deconstruct the target into name and value */
        /** Grab onto the target's name, and its value */
        const {name, value} = event.target;
        this.setState({
            /** Superimpose the value of the target onto the name of the target */
            /** This is a general form that allows for a variable name */
            /** In order to change state of variable names */
            [name]: value
        });
    };
    /** Function to handle searching specific parameters */
    handleSearching = event => {
        event.preventDefault();
        API.specificSearch(this.state).then(data => {
            console.log(data.data.response.docs);
        });
    }
    render(){
        return (
            <Row>
            <Column size="md-2"/>
            <Column size="md-8">
                <Title><h1>Search</h1></Title>
                <Input
                    heading="Topic"
                    value={this.state.topic}
                    onChange={this.handleInputChange}
                    name="topic"
                />
                <Input
                    heading="Start Year"
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                    name="startDate"
                />
                <Input
                    heading="End Year"
                    value={this.state.endDate}
                    onChange={this.handleInputChange}
                    name="endDate"
                />
                <Button
                    disabled={!this.state.topic}
                    onClick={this.handleSearching}
                >
                    Search
                </Button>
            </Column>
        </Row>
        );
    };
};