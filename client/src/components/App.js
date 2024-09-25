import React, { useEffect, useState } from "react";
import Node from "./Node";

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(()=>{
    const tempCards = [];
    for(let i = 0; i < 90; i++){
      const mynum = i+1;
      const temp = "Stego #0" + mynum;
      tempCards.push({
        title: temp
      })
      setCards(tempCards);
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="nodeContainer">
        {cards.map((card)=>(
          <Node name={card.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
