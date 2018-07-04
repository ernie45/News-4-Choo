/** This extra Component import will allow for component functions */
/** It allows for a component to be declared as a class */
import React, {Component} from "react";
import {Container} from "../components/Grid";
import Navpills from "../components/Navpills";
import Featured from "./Featured";
import Saved from "./Saved";
import API from "../utils/API";

class MainPage extends Component{
    /** Define the state of the page */
    state = {
        articles: "",
        currentPage: "Featured"
    };
    /** Upon loading the page */
    componentDidMount = () =>{
        this.loadArticles();
    };
    /** To load articles, we must call on the API */
    loadArticles = () => {
        API.getArticles().then(res => {
            /** Reverse function will flip data around */
            this.setState({articles: res.data.reverse()});
        });
    };
    saveArticle = id => {
        API.saveArticle(id).then(res => {
            this.loadArticles();
        });
    };
    /** Change the tab to the page passed in */
    handlePageChange = page => {
        this.setState({currentPage: page});
    };
    renderPage = () => {
        if (this.state.currentPage === "Featured"){
            return <Featured articles={this.state.articles} saveArticle={this.saveArticle}/>;
        }
        else if (this.state.currentPage === "Saved"){
            return <Saved articles={this.state.articles}/>
        }
    }
    /** Main Function */
    render(){
        return (
            <div>
                <Container>
                    <Navpills
                        handlePageChange={this.handlePageChange}
                        currentPage={this.state.currentPage}
                    />
                    {this.renderPage()}
                </Container>
            </div>
        )
    }
}

export default MainPage;
