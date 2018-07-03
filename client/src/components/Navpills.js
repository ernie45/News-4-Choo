import React from "react";

const Navpills = props =>
    <ul class="nav nav-tabs">
        <li
            onClick={() => props.handlePageChange("Featured")}
            className={props.currentPage === "Featured" ? "active" : ""}
        >
            <a>Home</a>
        </li>
        <li
            onClick={() => props.handlePageChange("Saved")}
            className={props.currentPage === "Saved" ? "active" : ""}
        >
            <a>Saved</a>
        </li>
    </ul>;

export default Navpills;