import { useState } from "react";
function Square() {
  const [value, setvalue] = useState(null);

  function handalClicke() {
    setvalue("x");
  }
  return (
    <button
      onClick={handalClicke}
      className="bg-yellow-100 border border-gray-400 w-12 h-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
