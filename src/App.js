import './index.css';

import Header from './components/Header';
import Items from './components/Items';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState(null);

  const saveCityHandler = (cityEntered) => {
    setCity(cityEntered);
  };

  return (
    <div className='bg-gray-800 h-full sm:h-full    text-white '>
      <Header getCityData={saveCityHandler} />
      <Items enteredCity={city} />
    </div>
  );
}

export default App;
