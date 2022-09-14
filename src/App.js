import logo from './logo.svg';
import './App.css';
import Calculator from './Component.js/Calculator';

function App() {
  return (
    <div className="App flex flex-col items-center justify-center bg-gray-100 h-screen">
      <h1 className=' text-2xl font-bold text-gray-400 mb-5'>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
