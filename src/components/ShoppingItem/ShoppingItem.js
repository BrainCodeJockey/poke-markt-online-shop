import { useEffect, useState } from "react";
import "./ShoppingItem.css";

// Fetch data der poke-API
export default function ShoppingItem() {
  const URL = "https://pokeapi.co/api/v2/item/";
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function catchItem() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setItems(data.results);
        console.log(data.results);
      } catch (error) {
        console.log("Stop");
      }
    }
    catchItem();
  }, []);

  // Ausgabe JSX
  return (
    <section>
      <section className="ShoppingItem__ItemList">
        {items.map((Item) => (
          <li className="ShoppingItem__Item" key={Item.name}>
            {Item.name}
          </li>
        ))}
      </section>
    </section>
  );
}
