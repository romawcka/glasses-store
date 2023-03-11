import { StoreContext } from '../context-reducer/StoreContext';
import { useContext } from "react";

const BasketProduct = ({item}) => {
  const {removeFromBasket} = useContext(StoreContext);

  const handleRemove = () => {
    removeFromBasket(item);
  }

  return (
    <div className='flex flex-row items-center gap-8 px-10'>
      <img src={item.image} alt={item.image + "glasses"} className="w-40"/>
      <div className='w-1/2 px-10'>
        <p className='text-xl font-medium'>{item.name}</p>
        <p className='text-lg'>₴{item.price.toFixed(2)}</p>
      </div>
      <button className='bg-gray-500 text-white text-lg font-medium rounded-lg p-4 hover:bg'
      onClick={handleRemove}>
        Remove
      </button>
    </div>
  )
}

export default BasketProduct;