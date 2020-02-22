import React from "react";

const styles = {
  button: {
    borderRadius: "50px",
    textTransform: "uppercase",
    height: "60px",
    minWidth: "fit-content",
    width: "80%",
    border: "1px solid"
  },
  span: {
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.7px"
  }
};

const SelectChip = ({ min, max, label }) => {
  return (
    <button
      style={styles.button}
      onClick={() => console.log("I was clicked!", min, max, label)}
    >
      <span style={styles.span}>{label} - Click me!</span>
    </button>
  );
};

export default SelectChip;
