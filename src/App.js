// import SetTimeOut from "./SetTimeOut";
// import Control from "./Control";
// import Counter from "./Counter";
// import Popup from "./Popup";
import ProductListItem from "./ProductListItem"


function App() {

  return (
    <>
      {/* <Control /> */}
      {/* <SetTimeOut /> */}
      {/* <Counter/> */}
      {/* <Popup/> */}
      <div style={{display: "flex", gap: "10px"}}>
        {<ProductListItem imgNo={1} productName="MAC OS" productPriceFormatted={"3,000,000원"} />}
        {<ProductListItem imgNo={2} productName="MAC BOOK" productPriceFormatted={"4,100,000원"}/>}
        {<ProductListItem imgNo={201} productName="MAC BOOK PRO" productPriceFormatted={"4,600,000원"}/>}
      </div>
    </>
    
  );
}

export default App;
