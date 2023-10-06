import { useState } from "react";

export default function Movies() {
  const [backgroundColor, setBackgroundColor] = useState("green");
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h1>Populära filmer</h1>
      <button
        disabled={checked}
        id="my-button"
        onClick={() => {
          const newBackgroundColor =
            backgroundColor === "green" ? "red" : "green";
          setBackgroundColor(newBackgroundColor);
        }}
        style={{ backgroundColor: backgroundColor }}>
        {backgroundColor === "green" ? "Gör till favorit" : "Ta bort favorit"}
      </button>
      <input
        onClick={() => {
          setChecked((prevState) => !prevState);
        }}
        type="checkbox"
        id="disable-button"
      />
      <label htmlFor="disable-button">Avaktivera favoritknappen</label>
    </>
  );
}
