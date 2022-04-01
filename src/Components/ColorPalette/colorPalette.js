import { useState } from "react";
import "./colorPalette.css";

const colorsInArray = [
  "#f28983",
  "#fbbc04",
  "#FFF475",
  "#CCFF90",
  "#A7FFEB",
  "#CBF0F8",
  "#AECBFA",
  "#D7AEFB",
  "#FDCFE8",
  "#E6C9A8",
  "#E8EAED",
  "#238AC5",
];

export const ColorPalette = () => {
  const [isHidden, setHidden] = useState(true);
  return (
    <>
      <div
        onMouseOver={() => {
          setHidden(!isHidden);
        }}
        onMouseOut={() => {
          setHidden(!isHidden);
        }}
        className="palette"
      >
        <i className="fas fa-palette" style={{fontSize: '1.5rem'}}></i>

        <div
          className="colorPaletteContainer boxShadow"
            style={{ display: isHidden ? "none" : "flex" }}
        >
          {colorsInArray.map((color) => {
            return (
              <div
                key={color}
                className="colorPalette"
                style={{
                  backgroundColor: color,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};