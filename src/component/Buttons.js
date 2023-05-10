import { useRef, useState } from "react";

function Buttons() {
  // const [result, setResult] = useState(0);
  const [num, setNum] = useState([]);
  const [val, setVal] = useState(0);
  const [leftOperand, setLeftoperand] = useState([]);

  const ref = useRef({
    leftOperand: 0,
    operator: " ",
    rightOperand: 0,
  });

  const clearRef = () => {
    ref.current.leftOperand = 0;
    ref.current.operator = "";
    ref.current.rightOperand = 0;
  };

  function updateLeftOperand() {
    let workingleftOperand = +[...num].join("");
    ref.current.leftOperand = workingleftOperand;
    setNum((num) => []);
  }

  function updateRightOperand() {
    let workingRightOperand = +[...num].join("");
    ref.current.rightOperand = workingRightOperand;
    console.log(ref.current);
  }

  const inputNum = (event) => {
    const btnValue = +event.target.value;
    setNum((num) => [...num, btnValue]);
  };

  const clear = (event) => {
    setNum((num) => []);
  };

  const divide = (event) => {
    updateLeftOperand();
    ref.current.operator = "divide";
    console.log(ref.current);
  };

  const multiply = (event) => {
    updateLeftOperand();
    ref.current.operator = "multiply";
    console.log(ref.current);
  };

  const minus = (event) => {
    updateLeftOperand();
    ref.current.operator = "subtract";
    console.log(ref.current);
  };
  const addition = (event) => {
    updateLeftOperand();
    ref.current.operator = "add";
    console.log(ref.current);
  };

  const dot = (event) => {
    if (num.indexOf(".") === -1) {
      setNum((num) => [...num, "."]);
    }
  };
  const equal = (event) => {
    updateRightOperand();

    if (ref.current.operator === "add") {
      const newNum = ref.current.leftOperand + ref.current.rightOperand;
      setNum((num) => [newNum]);
    } else if (ref.current.operator === "subtract") {
      const newNum = ref.current.leftOperand - ref.current.rightOperand;
      setNum((num) => [newNum]);
    } else if (ref.current.operator === "multiply") {
      const newNum = ref.current.leftOperand * ref.current.rightOperand;
      setNum((num) => [newNum]);
    } else if (ref.current.operator === "divide") {
      const newNum = ref.current.leftOperand / ref.current.rightOperand;
      setNum((num) => [newNum]);
    }
    clearRef();
  };

  return (
    <div>
      <div className="screen">{num}</div>
      <div className="btns">
        <button className="btn" onClick={divide}>
          /
        </button>
        <button className="btn" onClick={multiply}>
          *
        </button>
        <button className="btn" onClick={minus}>
          -
        </button>
        <button className="btn" onClick={addition}>
          +
        </button>
        <button className="btn" onClick={clear}>
          Clear
        </button>
        <button className="btn" value={9} onClick={inputNum}>
          9
        </button>
        <button className="btn" value={8} onClick={inputNum}>
          8
        </button>
        <button className="btn" value={7} onClick={inputNum}>
          7
        </button>
        <button className="btn" value={6} onClick={inputNum}>
          6
        </button>
        <button className="btn" value={5} onClick={inputNum}>
          5
        </button>
        <button className="btn" value={4} onClick={inputNum}>
          4
        </button>
        <button className="btn" value={3} onClick={inputNum}>
          3
        </button>
        <button className="btn" value={2} onClick={inputNum}>
          2
        </button>
        <button className="btn" value={1} onClick={inputNum}>
          1
        </button>
        <button className="btn" value={0} onClick={inputNum}>
          0
        </button>
        <button className="btn" onClick={dot}>
          .
        </button>
        <button className="btn" onClick={equal}>
          =
        </button>
      </div>
    </div>
  );
}

export default Buttons;
