import React from "react";
import Select from "react-select";
import { useGlobal } from "../context";
const options = [
  { value: "usd", label: "$" },
  { value: "eur", label: "€" },
  { value: "rub", label: "₽" },
  { value: "cny", label: "¥" },
];
const Dropdown = () => {
  const { setCurrency } = useGlobal();
  return (
    <Select
      onChange={(e) => {
        setCurrency(e);
      }}
      components={{
        IndicatorSeparator: () => null,
      }}
      placeholder='$'
      options={options}
      isClearable={false}
      isSearchable={false}
      styles={{
        dropdownIndicator: (provided, state) => ({
          ...provided,
          transform: state.selectProps.menuIsOpen && "rotate(180deg)",
          marginLeft: "-15px",
        }),
        control: (provided, state) => ({
          ...provided,
          boxShadow: "none",
          border: "none",
          paddingLeft: "5px",
          cursor: "pointer",
        }),
        menu: (provided, state) => ({
          ...provided,
          cursor: "pointer",
        }),
        option: (provided, state) => ({
          ...provided,
          cursor: "pointer",
          backgroundColor: state.isFocused && "#E2E8F0",
          color: state.isFocused && "#1e3a8a",
        }),
      }}
    />
  );
};

export default Dropdown;
