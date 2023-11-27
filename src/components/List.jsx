import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";

function List(props) {
  const arr = props.arr;

  return (
    <div className="phones">
      <h1>Your Bag</h1>
      {arr.length === 0 && <h2 className="empty">is currently empty</h2>}
      {arr.map((item, index) => {
        const { id, title, price, img, amount } = item;
        return (
          <div className="phone">
            <div className="left-side">
              <div className="img-box">
                <img src={img}></img>
              </div>
              <div className="info">
                <h2>{title}</h2>
                <h4 style={{ opacity: "0.4" }}>{"$" + "" + price}</h4>
                <Button onClick={() => props.delete(index)}>remove</Button>
              </div>
            </div>
            <div className="right-side">
              <div className="btns">
                <Button
                  onClick={() => {
                    props.increase(index);
                  }}
                >
                  <KeyboardArrowUpIcon />
                </Button>
                {amount}
                <Button
                  onClick={() => {
                    props.decrease(index);
                  }}
                >
                  <KeyboardArrowDownIcon />
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
