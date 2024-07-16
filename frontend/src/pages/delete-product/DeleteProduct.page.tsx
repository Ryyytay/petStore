import React from "react";
import "./delete-product.scss";
import { TextField, Button } from "@mui/material";
import { IProduct } from "../../types/global.typing";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../constants/url.constant";

const DeleteProduct: React.FC = () => {
  const redirect = useNavigate();
  const { id } = useParams();

  const handleDeleteBtnClick = () => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((response) =>
        redirect("/products", {
          state: { message: "Product Deleted Successfully" },
        })
      )
      .catch((error) => alert("Error"));
  };

  const handleBackBtnClick = () => {
    redirect("/products");
  };

  return (
    <div className="delete-product">
      <h2>Delete Product</h2>
      <h4>Confirm Delete?</h4>

      <div>
        <Button
          variant="outlined"
          color="error"
          onClick={handleDeleteBtnClick}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBackBtnClick}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default DeleteProduct;
