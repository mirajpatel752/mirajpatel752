import { useRef } from "react";

function UseRef() {
    const inputEl = useRef(null);
    console.log(inputEl,"inputEl")
    const onButtonClick = () => {
      inputEl.current.focus();
      console.log( inputEl.current.focus(),"inputEl----")
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
  export default UseRef;