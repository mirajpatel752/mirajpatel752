import React, { useRef } from 'react';
import Input from './useImperativeHandle';

const UseImperativeHandle = () => {
const inputRef = useRef(null);
return (
	<div>
	<Input onFocus={() => inputRef.current.focus()}
	ref={inputRef} />
	</div>
);
};

export default UseImperativeHandle;