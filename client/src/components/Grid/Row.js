import React from "react";
export const Row = ({fluid, children}) => 
    <div className={`row${fluid ? "-fluid" : ""}`} style={{marginBottom: "100px"}}>
        {children}
    </div>