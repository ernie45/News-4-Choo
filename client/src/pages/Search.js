import React, {Component} from "react";
import {Row, Column} from "../components/Grid";
import {Title, Input, Button, SearchResults} from "../components/Form";
import {List, Item} from "../components/List";
import API from "../utils/API";

export class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            topic: "",
            startDate: "",
            endDate: "",
            specificArticles: ""
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
            this.setState({
                specificArticles: data.data.response.docs
            });
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
                {/* <Input
                    heading="Start Year"
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                    name="startDate"
                    placeholder="YYYYMMDD"
                    type="Integer"
                />
                <Input
                    heading="End Year"
                    value={this.state.endDate}
                    onChange={this.handleInputChange}
                    name="endDate"
                    placeholder="YYYYMMDD"
                /> */}
                <Button
                    disabled={!this.state.topic}
                    onClick={this.handleSearching}
                >
                    Search
                </Button>
            </Column>
            <SearchResults>
                {this.state.specificArticles.length ? (
                    <List>
                        {this.state.specificArticles.map(article => {
                            return(
                                <Item>
                                    <Row>
                                        <a href={article.web_url} target="_blank">
                                            <strong>{article.snippet}</strong>
                                        </a>
                                        <Button 
                                            // onClick={() => this.saveArticle(article._id)}
                                        >
                                            Save
                                        </Button>
                                    </Row>
                                    <Row>
                                        <p>{article.snippet}</p>
                                    </Row>
                                </Item>
                            )
                        })}
                    </List>
                ): (
                    <h1>...</h1>
                )}
            </SearchResults>
        </Row>
        );
    };
};