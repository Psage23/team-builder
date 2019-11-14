import React from "react";

const PeopleList = props => {
    return (
        <div className = "card">
            <h1>{props.info.name}</h1>
            <div>
                <div>Email: {props.info.email}</div>
                <div>Role: {props.info.role}</div>
            </div>
        </div>
    );
};

export default PeopleList;