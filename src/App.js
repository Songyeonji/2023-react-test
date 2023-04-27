
import React, { useState } from "react";
import classnames from "https://cdn.skypack.dev/classnames";

function NotifyOnce({ children }) {
  const [visible, setVisible] = useState(false);
  const [workDone, setWorkDone] = useState(false);

  if (workDone == false) {
    setTimeout(function () {
      setVisible(true);
    }, 1000);

    setTimeout(function () {
      setVisible(false);
    }, 3000);

    setWorkDone(true);
  }

  return (
    <div
      className={classnames(
        "fixed transition-all right-[10px]",
        {
          "top-[-60px]": !visible,
        },
        {
          "top-[10px]": visible,
        }
      )}
    >
      {children}
    </div>
  );
}

function Alert({ color: color_, children }) {
  const color = color_ ?? "white";

  return (
    <div className="alert alert-info shadow-lg">
      <div className={`text-[${color}]`}>
        <span>
          <i className="fa-solid fa-circle-info"></i>
        </span>
        <span>{children}</span>
      </div>
    </div>
  );
}

function App() {



  return (
    <>
      <NotifyOnce>
        <Alert>안녕 대언오빠</Alert>
      </NotifyOnce>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, amet
        mollitia impedit porro asperiores quidem voluptatum cumque saepe iusto
        laudantium velit ad maiores nemo dolore ipsa delectus fuga ab quam.
      </div>
    </>
  );
}
export default App;