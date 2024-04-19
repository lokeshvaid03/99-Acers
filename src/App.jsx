import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Rented_prop from './Components/Rented_prop';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-cover-container">
        <Navbar />
        <div className="container mx-auto p-4">
          <Rented_prop />
        </div>
      </div>
    </>
  );
}

export default App;