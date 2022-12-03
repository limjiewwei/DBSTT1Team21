import React from "react";
import Card from "./Card";
import data from "./data";
const customStyle ={
    "padding-top": "10rem",
    "padding-left": "3rem",
    "display": "flex",
    "width" : "1920px",
    "height": "1080px"

    
}
function cardRow(note){
    return (
        <div className="col-md">
        <Card 
        key={note.id}
        title={note.title}
        text={note.text}
        buttonText={note.buttonText}
        /></div>
    )
}
function Body(){
    return <div className="bd-cheatsheet bg-grey" style={customStyle}>
        
            <div className="row">
            {data.map(cardRow)}

</div>
 
    </div>
}

export default Body;