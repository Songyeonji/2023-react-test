import React, { useState } from "react";

export default function ProductListItem({imgNo,productName,productPriceFormatted}) {

  /*
  방법 2(export default function ProductListItem(props)해줘야함)
  const {imgNo, productName, productPriceFormatted} = props;
  */
  // 방법 3(export default function ProductListItem(props)해줘야함)
  // const imgNo = props.imgNo;
  // const productName = props.productName;
  // const productPriceFormatted = props.productPriceFormatted;

  return (
    <>
      <div style={{display:"inline-flex", flexDirection: "column", gap: "10px"}}>
        <img src={`https://picsum.photos/id/${imgNo}/400/400`}/>
        <div style={{textAlign: "center", fontWeight: "bold"}}>{productName}</div>
        <div style={{textAlign: "center"}}>{productPriceFormatted}</div>
      </div>
    
  
    </>
  );
}
