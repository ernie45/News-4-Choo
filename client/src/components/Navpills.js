import React from "react";

const Navpills = props =>
    <ul class="nav nav-tabs">
        {/* When clicking, invoke handlePageChange with Featured */}
        {/* This will change current page to Featured */}
        {/* Then, className will become active for that page */}
        <li
            onClick={() => props.handlePageChange("Featured")}
            className={props.currentPage === "Featured" ? "active" : ""}
        >
            <a>Home</a>
        </li>
        {/* When clicking, invoke handlePageChange with Saved */}
        {/* This will change current page to Saved */}
        {/* Then, className will become active for that page */}
        <li
            onClick={() => props.handlePageChange("Saved")}
            className={props.currentPage === "Saved" ? "active" : ""}
        >
            <a>Saved</a>
        </li>
        {/* When clicking, invoke handlePageChange with Search */}
        {/* This will change current page to Search */}
        {/* Then, className will become active for that page */}
        <li
            onClick={() => props.handlePageChange("Search")}
            className={props.currentPage === "Search" ? "active" : ""}
        >
            <a>Search</a>
        </li>
    </ul>;

export default Navpills;