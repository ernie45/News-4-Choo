import React, {Component} from "react";
/** Grab onto components by destructuring them */
import {Row, Column} from "../components/Grid";
import {List, Item} from "../components/List";
import {Title, Button} from "../components/Form";
import API from "../utils/API";

/** Create another component, again in form of a variable */
export class Featured extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };
    /** We need to send the id along in order to save a unique article */
    saveArticle = id => {
        API.saveArticle(id).then(res => {
            /** After saving refresh the articles to display a fresh view */
            this.props.loadArticles();
        });
    };
    render(){
        return (
            <Row>
                {/* This is a placeholder to make left margin on page */}
                <Column size="md-2"/>
                <Column size="md-8">
                    <Title><h1>Featured Articles</h1></Title>
                    {this.props.articles.length ? (
                        <List>
                            {this.props.articles.slice(0, 9).map(article => {
                                return (
                                    <Item>
                                        <Row>
                                            <a href={article.url} target="_blank">
                                                <strong>{article.title}</strong>
                                            </a>
                                            <Button 
                                                onClick={() => this.saveArticle(article._id)}
                                            >
                                                Save
                                            </Button>
                                        </Row>
                                        <Row>
                                            <p>{article.summary}</p>
                                        </Row>
                                    </Item>
                                )
                            })}
                        </List>
                    ): (
                        <h1>Nothing to Display at This Moment</h1>
                    )}
                </Column>
                <Column size="md-2"/>
            </Row>
        );
    };
}; 