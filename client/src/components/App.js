import React, { useEffect, useState } from "react";
import Node from "./Node.js";
import Search from "./SearchNew.js";

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

  useEffect(() => {
    const card = document.getElementById(searchQuery);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [searchQuery]);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="wrapper">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="nodeContainer">
        {cards.map((card)=>(
          <Node name={card.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
