import React, { useState }  from "react";


export default function Order() {
  const options = [
    "사이다",
    "콜라",
    "머스타드 소스",
    "랜치 소스",
    "칠리 소스",
  ];  
  // new Array(options.length).fill(false)
  // new Array(6).fill(false)
  // [,,,,,].fill(false)
  // [false,false,false,false,false,false)
  const [optionCheckeds, setOptionCheckeds] = useState(new Array(options.length).fill(false));
  
  const toggleOptionCheck = (index) => {
    const newOptionCheckeds = optionCheckeds.map((el, _index) => _index == index ? !el : el);
    setOptionCheckeds(newOptionCheckeds);
  }
  
  const btnAllChecked = optionCheckeds.every((el) => el);
  const selectedCount = optionCheckeds.filter(el => el).length;
  
  const toggleAllChecked = () => {
    if ( btnAllChecked ) {
      // 전부 체크해제 해야함
      const newOptionCheckeds = optionCheckeds.map((el) => false);
      setOptionCheckeds(newOptionCheckeds);
    }
    else {
      // 전부 체크 해야함
      const newOptionCheckeds = optionCheckeds.map((el) => true);
      setOptionCheckeds(newOptionCheckeds);
    }
  }

  return (
    <>
      <h1>음식주문</h1>
      
      <h2>옵션 ({selectedCount} / {options.length})</h2>
      <span onClick={toggleAllChecked} style={{paddingLeft:30, userSelect:'none'}}>{btnAllChecked ? '[x]' : '[ ]'} 전체선택</span>
      <ul>
        {options.map((option, index) => (
          <li style={{userSelect:'none', cursor:'pointer'}} key={option} onClick={() => toggleOptionCheck(index)}>
            {optionCheckeds[index] ? "[x]" : "[ ]"}
            {option}
          </li>
        ))}
      </ul>
    </>
  );
}

