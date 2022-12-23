import React from "react";

const Item = (props) => {
  // Don't touch this
  if (typeof text === "string") {
    return <p data-testid="three-faulty-item">Inte ett nummer</p>;
  }
  return <p data-testid="three-item">{props.item}</p>;
};

// Slutför Three så att den skriver ut
// de items den får genom props i en lista av Items.
// Men se till att den filtrerar ut de som inte är nummer.
// Item ska alltså inte skriva ut "Inte ett nummer"

const Three = (props) => {
  const numericItems = props.items;

  return (
    <div>
      {numericItems
        .filter((j) => typeof j === "number")
        .map((i) => {
          return <Item item={i}></Item>;
        })}
    </div>
  );
};

export default Three;
