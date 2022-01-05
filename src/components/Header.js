import { SearchIcon } from '@heroicons/react/outline';
import { useRef } from 'react';

const Header = (props) => {
  const cityEntered = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const city = cityEntered.current.value;
    props.getCityData(city);
    cityEntered.current.value = '';
  };

  return (
    <form className='flex flex-col items-center' onSubmit={submitFormHandler}>
      <h1 className='text-3xl my-5 font-semibold'>Weather App</h1>
      <div className='flex justify-center relative '>
        <div className='flex items-center pl-2 w-1/6 h-full inset-x-0 rounded-xl absolute pointer-events-none text-black'>
          <SearchIcon className='h-5 w-5 text-red' />
        </div>
        <input
          type='text'
          className='p-3 rounded-xl bg-gray-50 text-black focus:outline-none w-full pl-10'
          placeholder='Search for a city'
          required
          ref={cityEntered}
        />
        <button
          type='submit'
          className='ml-4 font-medium text-white rounded-md bg-red-500 px-4 '
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Header;
