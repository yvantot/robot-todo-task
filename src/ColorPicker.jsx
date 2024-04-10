import { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#090911');

  function handleChange(event) {
    setColor(event.target.value);
  }

  return (
    <div style={{ backgroundColor: color }} className="text-white flex-col items-center p-5 rounded font-quicksand m-5 w-fit mx-auto">
      <h1 className="text-3xl font-bold shadow-lg p-2 rounded bg-slate-800">My Amazing Color Picker</h1>
      <p className="mt-5 bg-slate-800 p-1 rounded">Hex Color: {color}</p>
      <input className="m-2 rounded border-none" type="color" value={color} onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;
