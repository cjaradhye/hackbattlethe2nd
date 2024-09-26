import React, { useEffect, useState } from "react";
import Node from "./Node.jsx";
import Search from "./Search.jsx";
import Card from "./Card.jsx";

function Home() {
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
        {cards.map((card, index)=>(
          <Node 
            key={index}
            index={index+1}
            name={card.title} 
          />
        ))}
      </div>
      <Card
        index="3"
        name="Aradhye Macbook"
        verification="true"
        date="2nd March"
        img="https://5.imimg.com/data5/SELLER/Default/2024/3/402091260/BI/SX/EP/201576358/35026833-1-500x500.jpg"
      />
    </div>
  );
}

export default Home;
