/** This extra Component import will allow for component functions */
/** It allows for a component to be declared as a class */
import React, {Component} from "react";
import {Container} from "../components/Grid";
import Navpills from "../components/Navpills";
import {Featured} from "./Featured";
import {Saved} from "./Saved";
import {Search} from "./Search";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";

class MainPage extends Component{
    /** Define the state of the page */
    state = {
        articles: "",
        currentPage: "Featured",
    };
    /** Upon loading the page */
    componentDidMount = () =>{
        this.loadArticles();
    };
    /** To load articles, we must call on the API */
    loadArticles = () => {
        API.getArticles().then(res => {
            /** Reverse function will flip data around */
            this.setState({articles: res.data});
        });
    };
    /** Change the tab to the page passed in */
    handlePageChange = page => {
        /** Change currentPage to the props passed in */
        /** This page will become active or not for the navs */
        this.setState({currentPage: page});
    };
    /** Show proper component based on state of navpills clicked */
    renderPage = () => {
        if (this.state.currentPage === "Featured"){
            return <Featured 
                        articles={this.state.articles}
                        loadArticles={this.loadArticles}
                    />;
        }
        else if (this.state.currentPage === "Saved"){
            return <Saved 
                        articles={this.state.articles}
                        loadArticles={this.loadArticles}
                    />
        }
        else if (this.state.currentPage === "Search"){
            return <Search
                        saveArticle={this.saveArticle}
                    />
        }
    }
    /** Main Function */
    render(){
        return (
            <div>
                <Jumbotron/>
                <Container>
                    <Navpills
                        handlePageChange={this.handlePageChange}
                        currentPage={this.state.currentPage}
                    />
                    {/* Listen for currentPage changes and perform renderPage function */}
                    {this.renderPage()}
                </Container>
            </div>
        )
    }
}

export default MainPage;
