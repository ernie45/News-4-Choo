import React from "react";
import {Row, Column} from "../components/Grid";
import {Title, Button} from "../components/Form";
import {List, Item} from "../components/List";

const Saved = props =>
    <Row>
        <Column size="md-2"></Column>
        <Column size="md-8">
            <Title><h1>Saved Articles</h1></Title>
            {props.articles.length ? (
                <List>
                    {/* Assure only saved articles are returned */}
                    {/* Then map those articles onto the page */}
                    {props.articles.filter(article => {
                        return article.saved
                    }).map(article => {
                        return (
                            <Item key={article._id}>
                                <Row>
                                    <a href={article.url}>
                                        <strong>
                                            {article.title}
                                        </strong>
                                    </a>
                                    <Button 
                                        onClick={() => props.deleteArticle(article._id)}
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

export default Saved;