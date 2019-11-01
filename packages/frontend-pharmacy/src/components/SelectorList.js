import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './SelectorList.css';


const SelectorList = (props) => {
  const [selection, setSelection] = useState("N");

  const items = props.items.map((item, index) => <option value={item.id} key={index}>{item.name}</option>) 
  
  const handlerChangeOption = (e) => {
    let item = e.target.value;
    setSelection(item);
  }  
  
  useEffect(() => {
    props.handlerChange(selection);
  }, [selection])
   
  return (
    <div className="search--select">
      <label htmlFor={props.name.toLowerCase()}>{props.label.toLowerCase()}</label>
      <select name={props.name.toLowerCase()} id={props.name.toLowerCase()} onChange={handlerChangeOption} defaultValue={selection}>
        <option value="N" disabled>{props.optionLabel}</option>
        {items}
      </select>
    </div>
  )
}

SelectorList.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optionLabel: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  handlerChange: PropTypes.func
}
export default SelectorList;
