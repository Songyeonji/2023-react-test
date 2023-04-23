import { useState, useRef } from "react";
import NoRecord from "./NoRecord";

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`App : ${AppCallCount}`);

  const [no1, setNo1] = useState(0);
  const no2Ref = useRef(0);

  return (
    <>
      <button onClick={() => setNo1(no1 + 1)}>숫자 1 증가 : {no1}</button>
      <button onClick={() => no2Ref.current++}>
        숫자 2 증가 : {no2Ref.current}
      </button>
   
    </>
  );
}
export default App;