import React from 'react';

// Componente InputField
const InputField = ({ label, type, value, name, onChange }) => {
  return (
    <label className="formulario">
      {label}
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="input-field"
      />
    </label>
  );
};

// Componente SelectField
const SelectField = ({ label, value, name, options, onChange }) => {
  return (
    <label className="formulario">
      {label}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="select-field"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export { InputField, SelectField };
