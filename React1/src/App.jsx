
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Show / Hide Paragraph</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Text" : "Show Text"}
      </button>

      {show && (
        <p>
          Welcome! This paragraph appears when you click
          the Show Text button.
        </p>
      )}
    </div>
  );
}

export default App;
