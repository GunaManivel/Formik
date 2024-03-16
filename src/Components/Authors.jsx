import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Authors.css"; // Import the CSS file for custom styles

const Authors = ({ setId }) => {
  const [authorsData, setAuthorsData] = useState([]);
  const navigate = useNavigate();
  const [deleteData, setDeleteData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://65f2dcf7105614e6549f217e.mockapi.io/authors"
      );
      setAuthorsData(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/editauthor/${id}`);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://65f2dcf7105614e6549f217e.mockapi.io/authors/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-3">
      {/* <h2 className="text-center" style={{ color: "#2272FF" }}>
        Authors
      </h2> */}
      <div className="text-end">
        <button
          className="btn mt-4 Buttons"
          onClick={() => navigate("/createauthor")}
          style={{
            background: "#BAFF39",
          }}
        >
          Add New Author
        </button>
      </div>
      <br />
      <div className="row">
        {authorsData.map((author, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card custom-card customcard">
              <div className="card-body">
                <h5 className="card-title cardhead mb-3">{author.name}</h5>
                <p className="card-text cardbody">
                  BirthDate: {author.birthDate}
                </p>
                <p className="card-text cardbody">
                  Biography: {author.biography}
                </p>
                {/* Add more author details as needed */}
                <div className="d-flex justify-content-end  align-items-center">
                  <button
                    className="btn me-4 Buttons "
                    onClick={() => handleEdit(author.id)}
                    style={{ background: "#00DD00" }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger Buttons"
                    onClick={() => handleDelete(author.id)}
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

export default Authors;
