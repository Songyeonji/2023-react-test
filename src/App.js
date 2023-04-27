import React, { useEffect, useState, useRef } from "react";

let AppCallCount = 0;

function App() {
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const [no, setNo] = useState(0);



  useEffect( () => {
    inputNameRef.current.focus();

  }, [] );


    return (
    <>
    <input ref={inputNameRef} type="text" placeholder="이름" className="input input-bordered" />
    <hr />
    <input ref={inputAgeRef} type="number" placeholder="나이" className="input input-bordered" />
    <hr />
      <button className ="btn btn-outline" onClick={() => {
        setNo (no + 1);
        inputAgeRef.current.focus();
        }}>
        증가 : {no} 
      </button>
    </>
  );
}
export default App;