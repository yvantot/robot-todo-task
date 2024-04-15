import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="block w-fit mx-auto text-center bg-slate-900 text-white py-5 px-1 mt-10 font-quicksand rounded">
        <h1 className="text-3xl font-IBM-serif font-bold w-1/2 mx-auto">My Amazing Counter App</h1>
        <p className="text-sm text-slate-400">Made with React & Tailwind!</p>
        <p className="text-7xl font-IBM-mono mt-2">{count}</p>
        <div className="flex gap-2 justify-center mt-5">
          <button className="bg-green-600 p-1 rounded hover:bg-green-500 select-none" onClick={() => setCount((prevCount)=> prevCount + 1)}>
            Increment
          </button>
          <button className="bg-red-600 p-1 rounded hover:bg-red-500 select-none" onClick={() => count > 0 && setCount((prevCount)=> prevCount - 1)}>
            Decrement
          </button>
          <button className="bg-slate-600 p-1 rounded shrink hover:bg-slate-500 select-none" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          Made with ❤ by <a href="github.com/yvantot">@Jun Ivanne Dalman</a>
        </p>
      </div>
    </>
  );
}

export default Counter;
