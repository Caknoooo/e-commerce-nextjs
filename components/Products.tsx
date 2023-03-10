import { useContext } from 'react';
import { ProductContext } from './ProductsContext';


export default function Product({ _id, name, price1, description, picture }) {
  const { setSelectedProducts } = useContext(ProductContext);
  const addProduct = () => {
    setSelectedProducts(prev => [...prev, _id]);
  };

  return (
    <div className="w-64">
      <div className="bg-blue-100 dark:bg-blue-400 p-5 rounded-xl">
        <img src={picture} alt="" />
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
      <p className="text-sm mt-2">
        {description}
      </p>
      <div className="flex mt-2">
        <div className="text-2xl font-bold grow">${price1}</div>
        <button onClick={addProduct} className="bg-emerald-400 text-white py-1 px-3 rounded-xl">
          +
        </button>
      </div>
    </div>
  );
}
