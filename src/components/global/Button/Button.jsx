import React from "react";

export default function Button({ onClick, text }) {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
}
