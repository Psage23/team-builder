import React from "react";

const PeopleList = props => {
    return (
        <div className = "card">
            <h1>{props.info.name}</h1>
            <div>
                <div>Location: {props.info.location}</div>
                <div>Gender: {props.info.gender}</div>
            </div>
        </div>
    );
};

export default PeopleList;