// import React from "react";
// import Card from "./Card";

// function Node(props) {

//   function handleClick(e){
//     console.log("I'm clicked");
//     return(
//       <Card 
//         index={props.index}
//         name={props.name}
//         verification={props.verification}
//         date={props.date}
//         img={props.img}
//       />
//     )
//   }

//   return (
//     <div className="mynode" style={{backgroundImage:`url(${props.img})`}} id={props.index} name={props.name} onClick={handleClick}>
//       <div className="label">{"#" + (props.index + 1)}</div>
//     </div>
//   );
// }

// export default Node;


import React, { useState } from "react";
import Card from "./Card";

function Node(props) {
  const [showCard, setShowCard] = useState(false); // State to control the Card display

  function handleClick() {
    setShowCard(!showCard); // Toggle the state on click
  }

  return (
    <>
      <div 
        className="mynode" 
        style={{ backgroundImage: `url(${props.img})` }} 
        id={props.index} 
        name={props.name} 
        onClick={handleClick}
      >
        <div className="label">{"#" + (props.index + 1)}</div>
      </div>
      
      {showCard && (
        <Card 
          index={props.index}
          name={props.name}
          verification={props.verification}
          date={props.date}
          img={props.img}
        />
      )}
    </>
  );
}

export default Node;
