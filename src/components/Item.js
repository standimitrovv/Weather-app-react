const Item = (props) => {
  const iconCode = props.icon;
  const iconSvg = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${iconCode}.svg`;
  const city = props.cityName;
  const country = props.country;
  const weather = props.weather;
  const temp = props.temp;
  const tempMin = props.tempMin;
  const tempMax = props.tempMax;

  return (
    <li className='rounded-xl w-72  bg-white text-black list-none p-6'>
      <h2 className='flex mb-8 gap-4 relative'>
        <p className='text-3xl text-green-800'>{city}</p>
        <sup className='rounded-2xl w-10 h-6 bg-yellow-600 flex items-center justify-center text-white text-base  transform: -translate-x-1/3'>
          {country}
        </sup>
      </h2>
      <h3 className='my-8'>
        <span className='text-7xl font-bold'>{temp}&deg;C </span>
        <div className='text-xl mt-2 '>
          <span className='p-2 border-r-2 border-gray-300'>
            {tempMin} &deg; C
          </span>
          <span className='p-2'>{tempMax} &deg; C</span>
        </div>
      </h3>
      <figure className='py-1'>
        <img
          src={iconSvg}
          alt='Description of the temperature at the moment'
          className='w-2/4 h-28 -mt-4'
        />
        <figcaption
          className='text-xl ml-2
          font-medium text-green-500  uppercase'
        >
          {weather}
        </figcaption>
      </figure>
    </li>
  );
};

export default Item;
