import React, { useState } from "react";

export default function Contador() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <p> Contador </p>
      <p> Você Clicou {num} vezes!</p>
      <button onClick={() => setNum( num - 1)}>Decremento</button>
      <br /> <br />
      <button onClick={() => setNum(num + 1)}>Incrimento</button>
      <br /> <br />

  
    </div>
  );
}