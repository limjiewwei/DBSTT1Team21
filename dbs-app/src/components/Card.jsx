import React from "react";
const shadstyle= `
1px 2px 2px hsl(220deg 60% 50% / 0.333),
2px 4px 4px hsl(220deg 60% 50% / 0.333),
3px 6px 6px hsl(220deg 60% 50% / 0.333)`
const boxshadow={

    "box-shadow": shadstyle,

}
const uL = {
    textDecoration: "underline"
}
const sT = {
    textDecoration: "line-through"
}
const props ={
    title: "Test",
    text: "Hi. This is a sample text",
    buttonText: "Fetch"
}
function Card(props) {
    const [texty, setText] = React.useState("");
    const [added, addText] = React.useState("");
    const [deco, switchDeco] = React.useState(false);
    const [mouseO, changeMouse] = React.useState(false);
    function mousy(){
        changeMouse(!mouseO);
    }
    function switchy(){
        switchDeco(!deco);
        addText(added + texty + "\n");
    }
    function handleChange(event){
        setText(event.target.value);
        console.log(event.target.value);
    }
    return (<div className="card card-body" style={boxshadow}>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text" style={deco? sT:uL}>{props.text}</p>
    <p className="card-text">{added}</p>
    <input onChange={handleChange}/>
    <button onClick={switchy} onMouseOver={mousy} onMouseLeave={mousy} className="btn btn-primary" style={{backgroundColor: mouseO? "green":"blue"}}>{props.buttonText}</button>
  </div>)
};

export default Card;


