import Item from './Item';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import CountryNotFound from './CountryNotFound';

const Items = ({ enteredCity }) => {
  const [cityData, setCityData] = useState([]);
  const [hasError, setHasError] = useState(false);
  console.log(cityData);

  useEffect(() => {
    const fetching = async () => {
      try {
        const apiKey = 'Your API Key Goes Here';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Something went wrong ');
        const data = await res.json();

        setCityData((prevState) => [...prevState, data]);
      } catch {
        setHasError(true);
      }
    };
    fetching();
  }, [enteredCity]);

  return (
    <div className=' mt-16 justify-items-center grid gap-y-8 px-12 py-8 md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 lg:gap-x-16 xl:grid-cols-4 xl:gap-x-20'>
      {hasError &&
        ReactDOM.createPortal(
          <CountryNotFound open={hasError} setOpen={setHasError} />,
          document.getElementById('error-portal')
        )}
      {cityData.length > 0 &&
        cityData.map((city) => (
          <Item
            key={city.id}
            cityName={city.name}
            icon={city.weather[0].icon}
            country={city.sys.country}
            weather={city.weather[0].main}
            temp={Math.floor(city.main.temp)}
            tempMin={Math.floor(city.main.temp_min)}
            tempMax={Math.ceil(city.main.temp_max)}
          />
        ))}
    </div>
  );
};

export default Items;
