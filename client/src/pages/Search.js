import React from "react";
import {Row, Column} from "../components/Grid";
import {Title, Input, Button} from "../components/Form";

const Search = props => 
<Row>
    <Column size="md-2"/>
    <Column size="md-8">
        <Title><h1>Search</h1></Title>
        <Input
            heading="Topic"
            value={props.topic}
            onChange={props.handleInputChange}
            name="topic"
        />
        <Input
            heading="Start Year"
            value={props.startDate}
            onChange={props.handleInputChange}
            name="startDate"
        />
        <Input
            heading="End Year"
            value={props.endDate}
            onChange={props.handleInputChange}
            name="endDate"
        />
        <Button
            disabled={!props.topic}
            onClick={props.handleSearching}
        >
            Search
        </Button>
    </Column>
</Row>

export default Search;