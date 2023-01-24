import { useEffect, useState } from "react";

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    fetch('/api/products').then(response => response.json()).then(json => setProductsInfo(json));
  }, []);

  const categoriesNames = [...new Set(productsInfo.map(p => p.category))];
  
  return (
    <div className="p-5">
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            <h2 className="text-2xl">{categoryName}</h2>
          </div>
        ))}
        <div className="py-4">
          <div className="w-64">
            <div className="bg-blue-100 dark:bg-blue-400 p-5 rounded-xl">
              <img src="/products/iphone.png" alt="" />
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-lg">Iphone 14 Pro</h3>
            </div>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              nemo corrupti iusto enim eligendi neque magnam dolore nam sequi
              aliquam illo explicabo praesentium consequuntur alias cupiditate,
              delectus eveniet? Voluptates, placeat?
            </p>
            <div className="flex mt-2">
              <div className="text-2xl font-bold grow">$999</div>
              <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}