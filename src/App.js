import React, { useState, useMemo, useEffect } from "react";

function isPrimeNumber(no) {
  for (let i = 2; i < no; i++) {
    if (i * i > no) {
      break;
    }
    if (no % i == 0) {
      return false;
    }
  }

  return true;
}

function getPrimeNumbers(max) {
  const primeNumbers = [];

  for (let i = 2; i <= max; i++) {
    if (isPrimeNumber(i)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

function getPrimeNumbersCount(max) {
  return getPrimeNumbers(max).length;
}

let PrimeNosCountCallcount = 0;
function PrimeNosCount({max}) {
  PrimeNosCountCallcount++;
  console.log (`P PrimeNosCountCallcount :${ PrimeNosCountCallcount}`);
  const count = useMemo(() => getPrimeNumbersCount(max), [max]);


  return <div style = {{border : "10px soilid black", padding : 50}}>
    {max}사이에 존재하는 소스의 개수는 {count}개 이다.
  </div>
}

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no, setNo] = useState(0);


    return (
    <>
      <PrimeNosCount max={100}/>
      <hr />
      <PrimeNosCount max={200}/>
      <hr />
      <PrimeNosCount max={300}/>
      <hr />
      <PrimeNosCount max={100000}/>
      <hr />
      <button onClick={() => setNo (no +1)}>버튼 :{no}</button>

    </>
  );
}

export default App;