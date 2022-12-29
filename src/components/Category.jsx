import React from 'react';
import { category } from '../data/data';

function Category() {

  console.log(category);

  return (
    <div className='max-w-[1640px] px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* showing categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
          {category.map((item, index) => (
            <div key={index} className='bg-gray-100 drop-shadow-2xl hover:scale-105 hover:cursor-pointer hover:bg-teal-200 rounded-lg p-4 items-center justify-center'>
              <h2 className='font-bold sm:text-xl text-center'>{item.name}</h2>
              <img className='w-full' src={item.image} alt={item.name}/>
            </div>
          ))}            
        </div>
    </div>
  )
}

export default Category