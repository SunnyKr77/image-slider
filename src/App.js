import { useState } from 'react';
import React from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx';
import './App.css';

function App() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1627843084231-7f88beadf895?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1627843084231-7f88beadf895?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3016&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3056&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2969&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div 
        style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
      {/* left arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* right arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slides, slideIndex) => {
          <div>
            <RxDotFilled />
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
