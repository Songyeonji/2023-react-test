import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  atom,
  atomFamily,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from "recoil";

const pageNoAtomFamliy = atomFamily({
  key: "app/pageNoAtom",
  default: (pageNo) => pageNo,
});

function usePageCount(pageNo) {
  const [count, setCount] = useRecoilState(pageNoAtomFamliy(pageNo));

  const increaseOne = () => setCount(count + 1);
  const decreaseOne = () => setCount(count - 1);
  const increaseTen = () => setCount(count + 10);
  const decreaseTen = () => setCount(count - 10);
  const clear = () => setCount(0);

  return {
    count,
    increaseOne,
    decreaseOne,
    increaseTen,
    decreaseTen,
    clear,
  };
}

function Page1() {
  const pageCountState = usePageCount(1);

  return (
    <>
     <div className="text-2xl">페이지 1</div>
     <ul>
        <li>페이지 1의 숫자 : {pageCountState.count}</li>
        <li>
          <Button variant="contained" onClick={pageCountState.increaseOne}>
            1 증가
          </Button>
          <Button variant="contained" onClick={pageCountState.decreaseOne}>
            1 감소
          </Button>
          <Button variant="contained" onClick={pageCountState.increaseTen}>
            10 증가
          </Button>
          <Button variant="contained" onClick={pageCountState.decreaseTen}>
            10 감소
          </Button>
          <Button variant="contained" onClick={pageCountState.clear}>
            초기화
          </Button>
        </li>
      </ul>
    </>
    );
}

function Page2() {
  const pageCountState = usePageCount(2);

  return (
    <>
       <div className="text-2xl">페이지 2</div>
       <ul>
        <li>페이지 2의 숫자 : {pageCountState.count}</li>
        <li>
          <Button variant="contained" onClick={pageCountState.increaseOne}>
            1 증가
          </Button>
          <Button variant="contained" onClick={pageCountState.decreaseOne}>
            1 감소
          </Button>
          <Button variant="contained" onClick={pageCountState.increaseTen}>
            10 증가
          </Button>
          <Button variant="contained" onClick={pageCountState.decreaseTen}>
            10 감소
          </Button>
          <Button variant="contained" onClick={pageCountState.clear}>
            초기화
          </Button>
        </li>
      </ul>
    </>
  );
}

function Page3() {
  const pageCountState = usePageCount(3);

  return (
    <>
      <div className="text-2xl">페이지 3</div>
      <ul>
        <li>페이지 3의 숫자 : {pageCountState.count}</li>
        <li>
          <Button variant="contained" onClick={pageCountState.increaseOne}>
            1 증가
          </Button>
          <Button variant="contained" onClick={pageCountState.decreaseOne}>
            1 감소
          </Button>
          <Button variant="contained" onClick={pageCountState.increaseTen}>
            10 증가
          </Button>
          <Button variant="contained" onClick={pageCountState.decreaseTen}>
            10 감소
          </Button>
          <Button variant="contained" onClick={pageCountState.clear}>
            초기화
          </Button>
        </li>
      </ul>
    </>
  );
}

function Page4() {
  const pageCountState = usePageCount(4);

  return (
    <>
     <div className="text-2xl">페이지 4</div>
     <ul>
        <li>페이지 4의 숫자 : {pageCountState.count}</li>
        <li>
          <Button variant="contained" onClick={pageCountState.increaseOne}>
            1 증가
          </Button>
          <Button variant="contained" onClick={pageCountState.decreaseOne}>
            1 감소
          </Button>
          <Button variant="contained" onClick={pageCountState.increaseTen}>
            10 증가
          </Button>
          <Button variant="contained" onClick={pageCountState.decreaseTen}>
            10 감소
          </Button>
          <Button variant="contained" onClick={pageCountState.clear}>
            초기화
          </Button>
        </li>
      </ul>
    </>
  );
}
export default function App() {

  const [pageNo, setPageNo] = useState("page1");

  const switchPage = () => setPageNo(pageNo + 1 <= 4 ? pageNo + 1 : 1);

  const pageName = "page" + pageNo;

  return (
    <>
      <Button variant="contained" onClick={switchPage}>
        스위치
      </Button>
      <hr />
      <br />
      {pageName == "page1" && <Page1 />}
      {pageName == "page2" && <Page2 />}
      {pageName == "page3" && <Page3 />}
      {pageName == "page4" && <Page4 />}
    </>
  );
}
