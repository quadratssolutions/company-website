import React from "react";

export default function TextInput({
  id,
  name,
  label,
  type,
  hint,
  onChange,
  value,
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className="text-input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={hint}
        onChange={handleChange}
        value={value}
        className="input-background"
      />
    </div>
  );
}
