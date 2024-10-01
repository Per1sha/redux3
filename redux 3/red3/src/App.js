import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={() => {
        if (num < 15) setNum(num + 1);
      }}>+1</button>
      <button onClick={() => {
        if (num > 0) setNum(num - 1);
      }}>-1</button>

      <button onClick={() => setNum(0)}>reset</button>

      <button onClick={() => {
        let newNum = num + 5;
        if (newNum === 16 || newNum === 17 || newNum === 18) {
          newNum = 15;
        }
        setNum(newNum);
      }}>+5</button>


    <button onClick={() => {
        if (num < 10) {
          setNum(0);
        } else {
          setNum(num - 5);
        }
      }}>-5</button>


      <button onClick={() => setNum(0)}>click</button>
    </div>
  );
}

export default App;


