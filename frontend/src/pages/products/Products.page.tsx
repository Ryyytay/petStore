import { IProduct } from "../../types/global.typing";
import { useState, useEffect } from "react";
import "./products.scss";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  return (
    <div className="products">
      <h1>Products List</h1>
    </div>
  );
};

export default Products;
