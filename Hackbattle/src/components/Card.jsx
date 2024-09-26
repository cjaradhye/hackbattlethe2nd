import React from "react";

function Card(props){
    console.log("Card pe aa gaya");
    const imgUrl = props.img;
    console.log(imgUrl);
    return(
        <div className="card" style={{backgroundImage:`url(${imgUrl})`}}>
            <div className="label">{"#" + (props.index)}</div>
            <div className="cardDeets">
                <h1 className="cardItem">{props.name}</h1>
                <h4 className="cardItem">
                Stego Verification:
                <span style={{ color: props.verification ? '#4BCD00' : '#FF0000' }}>
                    {props.verification ? "Complete" : "Pending"}
                </span>
                </h4>
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