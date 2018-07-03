import React from "react";
/** Export the component as a variable */
export const Button = props =>
    /** Allow cascading props to be able to add any other properties */
    <button className="btn btn-success text-center" {...props}>
        {props.children}
    </button>