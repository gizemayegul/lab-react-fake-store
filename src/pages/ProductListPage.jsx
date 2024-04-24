import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data;
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://fakestoreapi.com/products");
  //       setProducts(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="px-4 py-8 border-b w-full">
      {products &&
        products.map((product) => {
          return (
            <Link to={`/product/details/${product.id}`} key={product.id}>
              <ProductCard {...product} />
            </Link>
          );
        })}
    </div>
  );
}

export default ProductListPage;
