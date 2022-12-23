import React from "react";

const Item = (props) => {
  return <p data-testid="two-item">{props.item}</p>;
};

// Slutför Two så att den skriver ut
// alla items som ges via props till Two.
// Använd komponenten Item för att skriva ut det
// i items.map nedan.

const Two = (props) => {
  const items = props.items;

  return (
    <div>
      {items.map((i) => {
        return <Item item={i}></Item>;
      })}
    </div>
  );
};

export default Two;
