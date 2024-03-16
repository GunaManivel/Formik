import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Books.css"; // Import the CSS file for custom styles

const Products = ({ setId }) => {
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate();
  const [deleteData, setDeleteData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://65f2dcf7105614e6549f217e.mockapi.io/books"
      );
      setProductsData(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://65f2dcf7105614e6549f217e.mockapi.io/books/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-3">
      {/* <h2 className="text-center">Books</h2> */}
      <div className="text-end">
        <button
          className="btn mt-4 Buttons "
          onClick={() => navigate("/create")}
          style={{
            background: "#BAFF39",
          }}
        >
          Add New Book
        </button>
      </div>
      <br />
      <div className="row">
        {productsData.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card custom-card">
              {" "}
              {/* Add custom-card class for custom styles */}
              <img
                src={item.image} // Add the URL of the image here
                className="card-img-top"
                alt={item.title}
                style={{ height: "320px" }}
              />
              <div className="card-body">
                <h5 className="card-title cardhead">{item.title}</h5>
                <p className="card-text cardbody">Author: {item.author}</p>
                <p className="card-text cardbody">ISBN: {item.isbn}</p>
                <p className="card-text cardbody">
                  Publication Date: {item.publicationDate}
                </p>
                <div className="d-flex justify-content-end  align-items-center">
                  <button
                    className="btn  me-4 Buttons"
                    onClick={() => handleEdit(item.id)}
                    style={{ background: "#00DD00" }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger Buttons"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
