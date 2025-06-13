import React, { useState } from 'react';

export default function Game() {
  const collection = [
    ["Egypt", "Cairo"],
    ["France", "Paris"],
    ["Germany", "Berlin"],
    ["Italy", "Rome"],
    ["Japan", "Tokyo"],
    ["Spain", "Madrid"],
    ["United Kingdom", "London"],
    ["United States", "Washington, D.C."],
  ];

  const shuffle = () => {
    const flat = collection.flat();
    return flat.sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState(shuffle());
  const [selected, setSelected] = useState([]);
  const [hiddenIndices, setHiddenIndices] = useState([]);

  const handleClick = (index) => {
    if (selected.includes(index) || hiddenIndices.includes(index)) return; // to not use it again 

    const newSelected = [...selected, index];
    setSelected(newSelected); // to highlidt

    if (newSelected.length === 2) {
      const first = cards[newSelected[0]];
      const second = cards[newSelected[1]];

      const isMatch = collection.some(pair =>
        pair.includes(first) && pair.includes(second) && first !== second
      );

      if (isMatch) {
        setHiddenIndices([...hiddenIndices, ...newSelected]);
        setSelected([]);
      } else {
        setCards(shuffle());
        setHiddenIndices([]);
        setSelected([]);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {cards.map((value, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`
            p-4 text-center font-semibold rounded-lg border 
            cursor-pointer select-none transition-all duration-200
            ${hiddenIndices.includes(index) ? "invisible" : ""}
            ${selected.includes(index) ? "bg-green-500 text-white" : "bg-brown-200"}
          `}
        >
          {value}
        </div>
      ))}
    </div>
  );
}
