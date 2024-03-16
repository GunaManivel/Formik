import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const Create = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState({
    id: "",
    title: "",
    author: "",
    isbn: "",
    publicationDate: "",
    image: "",
  });
  const validationSchema = Yup.object().shape({
    id: Yup.string()
      .matches(/^[0-9]/, "Invalid id is entered")
      .required(" Id is Required"),
    title: Yup.string()
      .matches(/^[A-Za-z0-9\s\-_,\.;:()]+$/, "Invalid Book name is entered")
      .required("Book name is required"),
    author: Yup.string()
      .matches(/^[A-Za-z0-9\s\-_,\.;:()]+$/, "Invalid Author name is entered")
      .required("Author name is Required"),

    isbn: Yup.string()
      .matches(/^[0-9]/, "Invalid ISBN number is entered")
      .required("Isbn number is required"),
    publicationDate: Yup.string()
      .matches(
        /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(\d{4})$/,
        "Invalid Publication Date is entered"
      )
      .required("PublicationDate is required"),
    image: Yup.string()
      .matches(
        /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
        "Invalid URL is entered"
      )
      .required("Image url is required"),
  });
  const formik = useFormik({
    initialValues: { Data },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(
          `https://65f2dcf7105614e6549f217e.mockapi.io/books`,
          values
        );
        alert("Data Created Successfully!!!");
        navigate("/products");
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleCancel = () => {
    navigate("/products");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card mt-3 mb-5 py-2" style={{ width: "50%" }}>
        <div className="card-header text-center">
          <h2>Add New Book</h2>
        </div>
        <div className="card-body cardbody">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label"> Id :</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  value={formik.values.id}
                  onChange={formik.handleChange}
                />
                <div className="text-danger">{formik.errors.id}</div>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Book Name :</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
                <div className="text-danger">{formik.errors.title}</div>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Author :</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  value={formik.values.author}
                  onChange={formik.handleChange}
                />
                <div className="text-danger">{formik.errors.author}</div>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">ISBN :</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="isbn"
                  value={formik.values.isbn}
                  onChange={formik.handleChange}
                />
                <div className="text-danger">{formik.errors.isbn}</div>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Publication Date :
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="publicationDate"
                  value={formik.values.publicationDate}
                  onChange={formik.handleChange}
                />
                <div className="text-danger">
                  {formik.errors.publicationDate}
                </div>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Image :</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                />
                <div className="text-danger">{formik.errors.image}</div>
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-start">
              <button
                type="submit"
                className="btn  py-2"
                style={{ background: "#00DD00", color: "#fff" }}
              >
                Add
              </button>
              <div style={{ width: "10px" }}></div> {/* Gap */}
              <button
                type="button"
                className="btn btn-secondary mr-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
