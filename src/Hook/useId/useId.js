import { useId } from "react";

function UseId() {
    const id = useId();
    console.log(id,"id--")
    return (
      <>
        <label htmlFor={id}>Do you like React?</label>
        <input id={id} type="checkbox" name="react"/>
        <input title={id} />
        <NameFields />
      </>
    );
  };
  export default UseId

  function NameFields() {
    const id = useId();
    console.log(id,"id2")
    return (
      <div>
        <label htmlFor={id + '-firstName'}>First Name</label>
        <div>
          <input id={id + '-firstName'} type="text" />
        </div>
        <label htmlFor={id + '-lastName'}>Last Name</label>
        <div>
          <input id={id + '-lastName'} type="text" />
        </div>
      </div>
    );
  }