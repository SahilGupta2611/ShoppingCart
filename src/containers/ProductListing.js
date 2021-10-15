import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/ProductAction";

const ProductListing = () => {
  var products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("err" + error);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products : " ,products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
