import React, { useState } from 'react';
import { EventFunc } from '../types';
import { useAppSelector } from '../app/hooks';
import useProductCall from '../hooks/useProductCall';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface ISearchComp {
  handleChange: EventFunc;
}

const SearchComp: React.FC<ISearchComp> = ({ handleChange }) => {
 
  
  return (
    <form onSubmit={(e)=>handleChange(e)} className="w-full  flex justify-center items-center">
    <div className="flex items-center border-b border-gray-500 py-2 justify-center">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Search"
        aria-label="Full name"
        onChange={(e)=>e.target.value}
      />
      <button
        className="bg-transparent hover:bg-red-900 text-red-900 font-semibold hover:text-white py-2 px-4 border border-red-900 hover:border-transparent rounded"
        type="submit"
      >
        Search
      </button>
     
    </div>
  </form>
  
  )
};

export default SearchComp;
