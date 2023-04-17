import React, { useState} from "react";

function App() {
    const [num, setNum] = useState(0);

    const onBtnIncreaseClicked = () => setNum(num + 1);
    const onBtnDecreaseClicked = () => setNum(num - 1);
    

  return (
    <>
      NUM: {num}
      <br />
      <button onClick={onBtnIncreaseClicked}>+1</button>
      <br />
      <button onClick={onBtnDecreaseClicked}>-1</button>
      <br />
      <button onClick={() => setNum(num + 10)}>+10</button>
      <br />
      <button onClick={() => setNum(num - 10)}>-10</button>
      <br />
    </>
    
  );
}

export default App;
