import React, {Component} from "react";
import {Row, Column} from "../components/Grid";
import {Title, Button} from "../components/Form";
import {List, Item} from "../components/List";
import API from "../utils/API";

export class Saved extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    };
    /** Delete a unique article by its ID */
    deleteArticle = id => {
        /** Call the API to perform the delete request */
        API.deleteArticle(id).then(res => {
            this.props.loadArticles();
        });
    };
    render(){
        return (
            <Row>
                <Column size="md-2"></Column>
                <Column size="md-8">
                    <Title><h1>Saved Articles</h1></Title>
                    {this.props.articles.length ? (
                        <List>
                            {/* Assure only saved articles are returned */}
                            {/* Then map those articles onto the page */}
                            {this.props.articles.filter(article => {
                                return article.saved
                            }).map(article => {
                                return (
                                    <Item key={article._id}>
                                        <Row>
                                            <a href={article.url} target="blank">
                                                <strong>
                                                    {article.title}
                                                </strong>
                                            </a>
                                            <Button 
                                                onClick={() => this.deleteArticle(article._id)}
                                            >
                                                Delete
                                            </Button>
                                        </Row>
                                        <Row>
                                            <p>{article.summary}</p>
                                        </Row>
                                    </Item>
                                )
                            })}
                        </List>
                    ) : (
                        <h1>No Saved Articles</h1>
                    )}
                </Column>
            </Row>
        );
    };
};