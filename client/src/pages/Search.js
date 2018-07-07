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
    handleSearching = event => {
        event.preventDefault();
        API.specificSearch().then(data => {
            console.log(data);
        });
            /** Assure that a topic has been entered */
            // if (this.state.topic){
            //     /** Traverse the entire database */
            //     for (var i = 0; i < this.state.articles.length; i++){
            //         /** Capture a string within an article's title */
            //         /** The RegExp is made to be able to handle a variable topic */
            //         var matchedString = this.state.articles[i].title.match(new RegExp(this.state.topic, "gi"));
            //         /** If there is a match created */
            //         if (matchedString){
            //             // console.log((new Date(this.state.articles[i].date)) <= (new Date("2019")));
            //             if ((new Date(this.state.articles[i].date)) >= (new Date(this.state.startDate))
            //                 && (new Date(this.state.articles[i].date)) <= (new Date(this.state.endDate))){
            //                     console.log(this.state.articles[i]);
            //             }
            //             else{
            //                 console.log("No match");
            //             }
            //         }
            //     }
            // };
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