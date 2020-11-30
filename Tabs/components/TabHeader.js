import React from 'react';

const TabHeader = (props) => {
    const selectedStyle = {
        backgroundColor: "blue",
        color: "white",
        width: "300px",
        display: "inline-block",
        content: "Content from tab 0"
        
    }
    const notSelectedStyle = {
        backgroundColor: "orange",
        width: "300px",
        display: "inline-block",
        content: "Content from tab 1"
    }
    return(
        <div style={props.selected ? selectedStyle : notSelectedStyle} onClick={() => props.handleClick (props.index)}>
            Tab # {props.index}: {props.title}
        </div>
    )
}

export default TabHeader;