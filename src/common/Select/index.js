import React from "react";
import "./style.scss";

const Select = ({ value, options = [], handleChange }) => {
  return (
    <div className="">
      <div class="options-wrapper">
        <select
          value={value}
          onChange={handleChange}
          className="education-block__date"
          style={{ width: "200px", marginRight: 0 }}
        >
          {options.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
