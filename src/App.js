
import './App.css';

function App() {
  let counter=0
  return (
    <div className="App">
      <h2 className='text-gray-100'>Счетчик:</h2>
      <h1>{counter}</h1>
      <div className=' '>
        <button className='bg-red-300'>Плюс</button>
        <button>Минус</button>
      </div>

    </div>
  );
}

export default App;
