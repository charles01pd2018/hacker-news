import React from 'react';
import '../../scss/components/_search.scss'


const InputWithLabel = ({id, value, type = 'text', onInputChange, isFocused, children}) => {

  const inputRef = React.useRef();

  React.useEffect(() => { if (isFocused) inputRef.current.focus() }, [isFocused]);

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