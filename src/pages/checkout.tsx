import Layout from "components/Layout";
import { ProductContext } from "components/ProductsContext";
import { useContext, useState, useEffect } from "react";

export default function CheckoutPage() {
  const { selectedProducts } = useContext(ProductContext);
  const [productsInfos, setProductsInfos] = useState([]);

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)];
    fetch("/api/products?ids=" + uniqIds.join(","))
      .then((response) => response.text())
      .then((json) => setProductsInfos(json));
  }, [selectedProducts]);

  return (
    <Layout>
      {!productsInfos.length && <div>No Product in your shopping cart</div>}
      {productsInfos.length &&
        productsInfos.map((productInfo) => <div key={productInfo}>{productInfo.name}</div>)}
    </Layout>
  );
}
