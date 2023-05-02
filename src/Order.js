import React, { useState, useMemo }  from "react";
import { useCallback } from "react";

function OrderMainFood({mianFoodCount, setMainFoodCount}) {
  return(
    <>
      <h2>메인 (수량 : {mianFoodCount})</h2>
      <div>
        <button onClick={() => setMainFoodCount(mianFoodCount + 1)}>증가</button>
        <button onClick={() => setMainFoodCount(mianFoodCount == 1 ? 1 : mianFoodCount - 1)}>
          감소
        </button>
      </div>
    </>
  )
}

const MemoizedOrderMainFood  = React.memo(OrderMainFood);

function OrderOptions({
  selectedCount, 
  options, 
  toggleAllChecked, 
  btnAllChecked, 
  optionCheckeds,
  toggleOptionCheck,
}) {
  return(
    <>
      <h2>옵션 ({selectedCount} / {options.length})</h2>
      <span onClick={toggleAllChecked} style={{paddingLeft:30, userSelect:'none'}}>{btnAllChecked ? '[v]' : '[ ]'} 전체선택</span>
      <ul>
        {options.map((option, index) => (
          <li style={{userSelect:'none', cursor:'pointer'}} key={option} onClick={() => toggleOptionCheck(index)}>
            {optionCheckeds[index] ? "[v]" : "[ ]"}
            {option}
          </li>
        ))}
      </ul>
    </>
  )
}

const MemoizedOrderOptions  = React.memo(OrderOptions);

export default function Order() {
  const [mianFoodCount, setMainFoodCount] = useState(1);

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
  
  const toggleOptionCheck = useCallback(
    (index) => {
    const newOptionCheckeds = optionCheckeds.map((el, _index) => _index == index ? !el : el);
    setOptionCheckeds(newOptionCheckeds);
  }, [optionCheckeds]
);

  const btnAllChecked = useMemo(() => optionCheckeds.every((el) => el), [optionCheckeds]);
  const selectedCount = useMemo(() => optionCheckeds.filter(el => el).length, [optionCheckeds]);
  
  const toggleAllChecked = useCallback(() => {
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
}, [optionCheckeds]);

  return (
    <>
      <h1>음식주문</h1>

      <MemoizedOrderMainFood 
        setMainFoodCount={setMainFoodCount} 
        mianFoodCount={mianFoodCount}
      />
      <MemoizedOrderOptions 
        selectedCount ={selectedCount} 
        options={options}
        toggleAllChecked={toggleAllChecked} 
        btnAllChecked ={btnAllChecked}
        optionCheckeds={optionCheckeds}
        toggleOptionCheck={toggleOptionCheck}
      />
      <MemoizedOrderOptions
        selectedCount ={selectedCount} 
        options={options}
        toggleAllChecked={toggleAllChecked} 
        btnAllChecked ={btnAllChecked}
        optionCheckeds={optionCheckeds}
        toggleOptionCheck={toggleOptionCheck}
      />
    </>
  );
}

