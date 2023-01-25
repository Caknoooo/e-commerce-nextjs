import { useEffect, useState } from "react";
import Product from "components/Products";
import { initMongoose } from "lib/mongoose";
import { findAllProducts } from "./api/products";

export default function Home({ products}) {
  const [phrase, setPhrase] = useState("");

  const categoriesNames = [...new Set(products.map((p) => p.category))];
  // console.log({ categoriesNames });

  // Find items
  if (phrase) {
    products = products.filter((p) => p.name.toLowerCase().includes(phrase));
  }

  return (
    <div className="p-5">
      <input
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="Search for products..."
        className="bg-gray-100 dark:bg-gray-200 w-full py-2 px-4 rounded-xl"
      />
      <div>
        {categoriesNames.map((categoryName) => (
          <div key={categoryName}>
            {products.find((p) => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl py-5 font-bold">{categoryName}</h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products
                    .filter((p) => p.category === categoryName)
                    .map((productsInfo) => (
                      <div key={productsInfo._id} className="px-5 snap-start">
                        <Product {...productsInfo} />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
