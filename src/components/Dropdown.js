import React from "react";
import Select from "react-select";

const Dropdown = (props) => {
  return (
    <Select
      className="dropdown "
      value={props.value} // set selected value
      options={props.options} // set list of the data
      onChange={props.onChange} // assign onChange function
    />
  );
};
export default Dropdown;
