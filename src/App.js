import React, { useState, useEffect } from "react";

let AppCallCount = 0;
let SubCallCount = 0;

function Sub({ appNo }) {
  SubCallCount++;
  console.log(`SubCallCount :  ${SubCallCount}`);

  const [no, setNo] = useState(0);
  const [no2, setNo2] = useState(0);

  useEffect(() => {
    console.log("effect 1 : 단 한번 실행");
  }, []);
  useEffect(() => {
    console.log("effect 2 : 부모(App)의 appNo가 바뀔 때마다 실행");
  }, [appNo]);

  useEffect(() => {
    console.log("effect 3 : 나(Sub)의 no가 바뀔 때마다 실행");
  }, [no]);

  useEffect(() => {
    console.log("effect 4 : appNo 혹은 no가 바뀔 때마다 실행");
  }, [appNo, no]);

  useEffect(() => {
    console.log("effect 5 : 매번 실행");
  });

    return (
    <>
    <div style={{ border: "10px solid blue", padding: 10 }}>
        App no : {appNo}
        <button className="btn btn-outline" onClick={() => setNo(no + 1)}>
          Sub 버튼(no) : {no}
        </button>
        <button className="btn btn-outline" onClick={() => setNo2(no2 + 1)}>
          Sub 버튼(no2) : {no2}
        </button>
    </div>

    </>
  );
}

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no, setNo] = useState(0);



    return (
    <>
    <div style={{ border: "10px solid red", padding: 10 }}>
        <button className="btn btn-outline" onClick={() => setNo(no + 1)}>
          APP 버튼 : {no}
        </button>
        <hr />
        <Sub appNo={no} />
    </div>

    </>
  );
}

export default App;