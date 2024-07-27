import { useState } from 'react';
import './App.css';

function App() {
  
  const[counter,setCounter]=useState(0)
  const plus=()=>{
    setCounter(counter+1)
  }
  const minus=()=>{
    setCounter(counter-1)
  }
  return (
    <div className="App flex flex-col gap-3 items-center">
      <h2 className='text-gray-600 text-4xl font-bold'>Счетчик:</h2>
      <h1 className='font-bold text-4xl'>{counter}</h1>
      <div className='flex flex-row gap-3'>
        <button onClick={plus} className='bg-red-400 p-4 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out '>Плюс</button>
        <button onClick={minus} className='bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out'>Минус</button>
        </div>

      </div>
  );
}

export default App;
