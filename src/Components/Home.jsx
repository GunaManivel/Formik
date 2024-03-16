import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Home.css";

const Home = ({ setBookId, setAuthorId }) => {
  const [booksData, setBooksData] = useState([]);
  const [authorsData, setAuthorsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooksData();
    fetchAuthorsData();
  }, []);

  const fetchBooksData = async () => {
    try {
      const response = await axios.get(
        "https://65f2dcf7105614e6549f217e.mockapi.io/books"
      );
      setBooksData(response.data);
    } catch (error) {
      console.log("Error fetching books: ", error);
    }
  };

  const fetchAuthorsData = async () => {
    try {
      const response = await axios.get(
        "https://65f2dcf7105614e6549f217e.mockapi.io/authors"
      );
      setAuthorsData(response.data);
    } catch (error) {
      console.log("Error fetching authors: ", error);
    }
  };

  const handleBookDetails = (id) => {
    navigate(`/products`);
  };

  const handleAuthorDetails = (id) => {
    navigate(`/authors`);
  };

  return (
    <div className="container mt-5 mb-5 ">
      <h2 className="text-start  mb-4" style={{ color: "#BAFF39" }}>
        Books
      </h2>
      <table className="table table-striped ">
        {/* Table header */}
        <thead>
          <tr>
            <th className="tablehead " scope="col">
              ID
            </th>
            <th className="tablehead " scope="col">
              Title
            </th>
            <th className="tablehead " scope="col">
              Author
            </th>
            <th className="tablehead " scope="col">
              Publication Date
            </th>
            <th className="tablehead " scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Book data */}
          {booksData.map((book, index) => (
            <tr key={index}>
              <td className="tablebody ">{book.id}</td>
              <td className="tablebody ">{book.title}</td>
              <td className="tablebody ">{book.author}</td>
              <td className="tablebody ">{book.publicationDate}</td>
              <td>
                <button
                  className="btn btn-outline-primary Buttons"
                  onClick={() => handleBookDetails(book.id)}
                >
                  See Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />

      <hr />
      <br />
      <h2 className="text-start  mb-4" style={{ color: "#BAFF39" }}>
        Authors
      </h2>
      <table className="table table-striped">
        {/* Table header */}
        <thead>
          <tr>
            <th className="tablehead " scope="col">
              ID
            </th>
            <th className="tablehead " scope="col">
              Name
            </th>
            <th className="tablehead " scope="col">
              Date of Birth
            </th>
            {/* <th colSpan="" scope="col">
              Biography
            </th> */}
            <th className="tablehead " scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Author data */}
          {authorsData.map((author, index) => (
            <tr key={index}>
              <td className="tablebody ">{author.id}</td>
              <td className="tablebody ">{author.name}</td>
              <td className="tablebody ">{author.birthDate}</td>
              {/* <td>{author.biography}</td> */}
              <td>
                <button
                  className="btn btn-outline-primary Buttons "
                  onClick={() => handleAuthorDetails(author.id)}
                  // style={{ width: "150px", height: "40px" }}
                >
                  See Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default Home;
