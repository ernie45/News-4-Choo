import React from "react";
/** Create container for the main page */
/** Export container which takes in two parameters */
export const Container = ({fluid, children}) =>
    /** If fluid is true, tack on -fluid, else, don't */
    <div className={`container${fluid ? "-fluid": ""}`}>
        {children}
    </div>