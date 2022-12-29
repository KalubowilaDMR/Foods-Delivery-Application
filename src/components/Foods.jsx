import React, { useState } from 'react'
import {foodsData} from '../data/data.js';

function Foods() {
    
    const[foodItems, setFoodItems] = useState(foodsData);

    // Fiter Items
    const filteringType = (category) => {
        setFoodItems(
            foodsData.filter((item) => {
                return item.category === category;
            })
        );
    }

    // Filter Price
    const filteringPrice = (price) => {
        setFoodItems(
            foodsData.filter((item) => {
                return item.price === price;
            })
        );
    }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-teal-600 font-bold text-4xl text-center'>Menu Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Types */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoodItems(foodsData)} className='m-1 border-teal-600 bg-teal-600 text-black/90 hover:text-black/100 hover:bg-white font-bold'>All</button>
                    <button onClick={() => filteringType('Pizza')} className='m-1 border-teal-600 bg-teal-600 text-black/90 hover:text-black/100 hover:bg-white font-bold'>Pizza</button>
                    <button onClick={() => filteringType('Burger')} className='m-1 border-teal-600 bg-teal-600 text-black/90 hover:text-black/100 hover:bg-white font-bold'>Burger</button>
                    <button onClick={() => filteringType('Chicken')} className='m-1 border-teal-600 bg-teal-600 text-black/90 hover:text-black/100 hover:bg-white font-bold'>Chicken</button>
                    <button onClick={() => filteringType('Desserts')} className='m-1 border-teal-600 bg-teal-600 text-black/90 hover:text-black/100 hover:bg-white font-bold'>Desserts</button>
                </div>
            </div>

            {/* Filter Prices */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filteringPrice('$')} className='m-1 border-teal-600 bg-teal-600 text-black/90 hover:text-black/100 hover:bg-white font-bold'>$</button>
                    <button onClick={() => filteringPrice('$$')} className='m-1 border-teal-600 bg-teal-600 text-black/90 hover:text-black/100 hover:bg-white font-bold'>$$</button>
                    <button onClick={() => filteringPrice('$$$')} className='m-1 border-teal-600 bg-teal-600 text-black/90 hover:text-black/100 hover:bg-white font-bold'>$$$</button>
                    <button onClick={() => filteringPrice('$$$$')} className='m-1 border-teal-600 bg-teal-600 text-black/90 hover:text-black/100 hover:bg-white font-bold'>$$$$</button>
                </div>
            </div>
        </div>
        {/* Display Foods Items */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foodItems.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 hover:cursor-pointer duration-300'>
                    <img 
                        src={item.image} alt={item.name}
                        className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-teal-600 p-1 text-white font-bold rounded'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Foods