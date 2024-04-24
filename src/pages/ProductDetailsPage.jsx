import placeholderImage from "./../assets/placeholder.png";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  // The `productId` coming from the URL parameter
  let { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        const productDetails = response.data;
        setProduct(productDetails);
        console.log("productDetails", productDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-gray-100 py-6 px-4 m-2">
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <>
          <img
            src={(product && product.image) || placeholderImage}
            alt="profile-photo"
            className="w-64 h-64 object-cover border-2 border-gray-300"
          />
          {!product.category && <p className="h-10"></p>}
          {product.category && (
            <p className="mb-2 bg-indigo-600 py-px px-4 text-white w-fit mt-4 mb-2 rounded">
              {product.category}
            </p>
          )}
          <h1 className="text-2xl mt-4 font-bold absolute h-80">
            {product && product.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 mb-4 border-b pb-4 h-40">
            <p className="text-left mb-2 pb-2">
              {product && product.description}
            </p>

            <p className="text-left mb-2 pb-2 h-80">
              <strong>
                <span className="text-2xl m-1 font-bold text-indigo-600 hover:underline">
                  {product && product.price && `$${product.price}`}
                </span>
              </strong>
            </p>
          </div>

          <Link to="/">
            <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
              Back
            </button>
          </Link>
        </>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
