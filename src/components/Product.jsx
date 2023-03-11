import React, { useContext } from 'react'
import { StoreContext } from '../context-reducer/StoreContext'

const Product = ({item}) => {
  const {addToBasket} = useContext(StoreContext);

  const handleAdd = () => {
    addToBasket(item);
  }

  return (
    <div className='mx-auto px-8 border border-gray-200 rounded-lg'>
      <img src={item.image} alt="glasses"/>
      <div className='flex flew-row items-center justify-between py-4'>
        <div>
          <p className='text-xl'>{item.name}</p>
          <p className='text-lg'>₴{item.price}</p>
        </div>
        <button className='bg-indigo-500 text-white text-lg font-medium rounded-full p-4'
        onClick={handleAdd}
        >Add to Basket!</button>
      </div>
    </div>
  )
}

export default Product