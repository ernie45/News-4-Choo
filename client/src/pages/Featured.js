import React from "react";
/** Grab onto components by destructuring them */
import {Row, Column} from "../components/Grid";
import {List, Item} from "../components/List";
import {Title, Button} from "../components/Form";

/** Create another component, again in form of a variable */
const Featured = props => 
    <Row>
        {/* This is a placeholder to make left margin on page */}
        <Column size="md-2"/>
        <Column size="md-8">
            <Title><h1>Featured Articles</h1></Title>
            {props.articles.length ? (
                <List>
                    {props.articles.slice(0, 9).map(article => {
                        return (
                            <Item>
                                <Row>
                                    <a href={article.url}>
                                        <strong>{article.title}</strong>
                                    </a>
                                    <Button 
                                        onClick={() => props.saveArticle(article.id)}
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

export default Featured;