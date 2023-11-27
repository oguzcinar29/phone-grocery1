import React, { useState } from "react";
import Navbar from "./Navbar";
import List from "./List";
import Clear from "./Clear";
import phones from "../data";

function App() {
  const [arr, setArr] = useState(phones);
  const [number, setNumber] = useState(arr.length);
  const [cost, setCost] = useState(
    phones.reduce((a, v) => (a = a + v.price), 0)
  );

  function deleteItem(index) {
    setArr((prevArr) => {
      return prevArr.filter((item, index1) => {
        console.log(item.amount + "hello");
        setCost(cost - prevArr[index].price * prevArr[index].amount);
        setNumber(number - prevArr[index].amount);
        return index !== index1;
      });
    });
  }
  function increaseItem(index) {
    setArr((prevArr) => {
      prevArr[index].amount++;
      setCost(cost + prevArr[index].price);
      setNumber(1 + number);
      return [...prevArr];
    });
  }
  function decreaseItem(index) {
    setArr((prevArr) => {
      if (prevArr[index].amount < 2) {
        return prevArr.filter((item, index1) => {
          setCost(cost - prevArr[index].price);
          setNumber(number - 1);
          return index !== index1;
        });
      } else {
        prevArr[index].amount--;
        setCost(cost - prevArr[index].price);
        setNumber(number - 1);
        return [...prevArr];
      }
    });
  }
  function handleEmpty() {
    setArr([]);
    setNumber(0);
  }

  return (
    <div className="container">
      <Navbar number={number} />
      <List
        increase={increaseItem}
        decrease={decreaseItem}
        delete={deleteItem}
        arr={arr}
      />

      <Clear empty={handleEmpty} arr={arr} cost={cost} />
    </div>
  );
}

export default App;
