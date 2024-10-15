function Square() {
  return (
    <button className="bg-yellow-100 border border-gray-400 w-12 h-12 m-1 leading-9 text-lg">
      1{" "}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
