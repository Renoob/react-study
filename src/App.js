import React, { useState } from 'react';
import Hook from "./hook";

function App() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      { display && <Hook /> }
      <button onClick = { () => { setDisplay(!display) } }>{ display ? "销毁组件" : "显示组件" }</button>
    </div>
  );
}

export default App;
