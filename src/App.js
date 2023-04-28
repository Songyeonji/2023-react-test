import React, { useState, useEffect } from "react";

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount :  ${AppCallCount}`);

  const [no, setNo] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

    return (
    <>
      <div>
        <button className="btn btn-outline" onClick={() => setNo(no + 1)}>
        APP 버튼 : {no}
        </button>
        <button className="btn btn-outline" onClick={() => setIsDark(!isDark)}>
          테마토글
        </button>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          error mollitia ad veritatis delectus itaque eaque minus perspiciatis
          quae atque id, minima praesentium ullam quidem enim alias. Placeat,
          obcaecati corporis.
        </div>

        <h1 className="color-primary">안녕, 반가워</h1>
      </div>
    </>
  );
}

export default App;