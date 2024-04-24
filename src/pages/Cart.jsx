import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState("");
  const [productDetail, setProductDetail] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts/5")
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(productDetail);
  console.log(cart.products);
  return (
    <div className="bg-gray-100 py-6 px-4 m-2">
      {cart.products &&
        cart.products.map((product) => (
          <div
            className="bg-white p-8 rounded-lg shadow-md mb-6"
            key={product.productId}
          >
            <div>{product.quantity}</div>
            {productDetail &&
              productDetail.map((detail) => (
                <div key={detail.id}>
                  {detail.id === product.productId && (
                    <>
                      <img
                        src={detail.image}
                        className="w-64 h-64 object-cover border-2 border-gray-300"
                      />
                      <div className="mb-2 bg-indigo-600 py-px px-4 text-white w-fit mt-4 mb-2 rounded">
                        {detail.category}
                      </div>
                      <h2 className="text-2xl mt-4 font-bold absolute h-80">
                        {detail && detail.title}
                      </h2>
                      <p className="text-left mb-2 pb-2 h-80">
                        <strong>
                          <span className="text-2xl m-1 font-bold text-indigo-600 hover:underline">
                            {detail && detail.price && `$${detail.price}`}
                          </span>
                        </strong>
                      </p>
                    </>
                  )}
                </div>
              ))}
          </div>
        ))}
      <Link to="/">
        <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
          Back
        </button>
      </Link>
    </div>
  );
}
