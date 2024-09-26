import React from "react";

function Card(props){
    const imgUrl = props.img;
    console.log(imgUrl);
    return(
        // <div className="card" style={{backgroundImage:'url(${imgUrl})'}}>
        <div className="card">
            <div className="label">{"#" + (props.index)}</div>
            <div className="cardDeets">
                <h1 className="cardItem">{props.name}</h1>
                <h4 className="cardItem">Stego Verification:<span style={{color:"#4BCD00"}}>Complete</span></h4>
                <h6 className="cardItem">Last Updated: {props.date}</h6>
                <div className="cardItem">
                    <button className="viewStego">View Stego Signature</button>
                    <button className="updateStego">Update your Stego</button>
                </div>
            </div>
        </div>
    )
}

export default Card;