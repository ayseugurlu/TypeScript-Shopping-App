import React from 'react'
import { Product } from '../types';

interface ICard {
    item:Product;
    text:string;
    handleFunc: (item:Product) => void
}

const Card:React.FC<ICard> = ({item,text,handleFunc}) => {
  return (
    <div className='w-10/12 sm:w-1/2 md:w-4/12 lg:w-3/12 flex flex-col justify-between bg-green-300 rounded-lg'>
        <div className='p-4'>
            <h1 className='text-gray-900 uppercase text-xl'>{item.title}</h1>
            <p className='text-sm mt-1 text-gray-500'>{item.description}</p>
        </div>
        <img src={item.images[0]} alt={item.title} />
        <div>
            <h2>{item.price}</h2>
            <button onClick={()=>handleFunc(item)}>{text}</button>
        </div>
    </div>
  )
}

export default Card