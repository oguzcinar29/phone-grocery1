import React from "react";
import Button from "@mui/material/Button";

function Clear({ arr, cost, empty }) {
  return (
    <>
      {arr.length !== 0 && (
        <div className="bottom">
          <p>
            <hr />
          </p>
          <div className="bottom-text">
            <h2>Total</h2>
            <h2 className="price">
              {"$" +
                "" +
                cost.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
            </h2>
          </div>
          <Button
            onClick={() => {
              empty();
            }}
          >
            Clear Cart
          </Button>
        </div>
      )}
    </>
  );
}

export default Clear;
