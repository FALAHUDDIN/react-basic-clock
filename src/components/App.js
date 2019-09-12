import React, { useState } from "react";
import Clock from "./Clock";
import Header from "./Header";

function App() {
  const title = useState("React Clock");
  return (
    <div>
      <Header title={title} />
      <Clock />
    </div>
  );
}

export default App;
