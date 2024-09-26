import React, { useEffect, useState } from "react";
import Node from "./Node.jsx";
import Search from "./Search.jsx";
import Card from "./Card.jsx";
import stegos from "./List.jsx";

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
        {stegos.map((stego, index)=>(
          <Node 
            key={stego.index}
            index={stego.index}
            name={stego.name} 
            img={stego.img}
            verification={stego.verification}
            date={stego.date}
          />
        ))}
      </div>
      {/* <Card
        index="3"
        name="Aradhye Macbook"
        verification="true"
        date="2nd March"
        img="https://5.imimg.com/data5/SELLER/Default/2024/3/402091260/BI/SX/EP/201576358/35026833-1-500x500.jpg"
      /> */}

      {/* {stegos.map((card)=>{
        return(
          <Card 
            index={card.index}
            name={card.name}
            verification={card.verification}
            date={card.date}
            img={card.img}
          />
        )
      })} */}
    </div>
  );
}

export default Home;
