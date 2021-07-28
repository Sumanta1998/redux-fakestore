import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../actions/productionActions";
const ProductComponent = () => {
  const { productId } = useParams();
  const product = -useSelector((state) => state.product);
  const dispatch = useDispatch();
  const fetchProductDetails = async () => {
    const response = await axios.get(`/${productId}`).catch((err) => {
      console.log(err);
    });
    dispatch(setProducts(response.data));
  };
  return (
    <div>
      <h1>p</h1>
    </div>
  );
};
