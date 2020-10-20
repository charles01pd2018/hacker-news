// Represents the input field and the label alongside it

import React from 'react';

// styles
import '../../scss/components/_search.scss';


let InputWithLabel = ({ id, value, type = 'text', onInputChange, isFocused, children }) => {

  let inputRef = React.useRef()

  React.useEffect(() => { if (isFocused) inputRef.current.focus() }, [isFocused]) // storing the search input focus state

  return (

    <div className='label'>

      <label htmlFor={id}>{children}</label>

      &nbsp;

      <span className='input'>
        <input ref={inputRef} id={id} type={type} value={value} onChange={onInputChange} />
      </span>
      
    </div>
  );
};

export default InputWithLabel