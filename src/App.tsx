import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleButtonClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const btnValue = e.currentTarget.value;

    switch (btnValue) {
      case "AC":
        setValue("");
        break;

      case "DE":
        setValue((prev) => prev.slice(0, -1));
        break;

      case "=":
        try {
          const result = Function(`"use strict"; return (${value})`)();
          setValue(String(result));
        } catch {
          setValue("Error");
        }
        break;

      default:
        setValue((prev) => prev + btnValue);
    }
  };

  const buttons = [
    ["AC", "DE", ".", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "-"],
    ["00", "0", "="],
  ];

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          {buttons.map((row, i) => (
            <div key={i}>
              {row.map((btn) => (
                <input
                  key={btn}
                  type="button"
                  value={btn}
                  onClick={handleButtonClick}
                  className={btn === "=" ? "equal" : ""}
                />
              ))}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default App;
