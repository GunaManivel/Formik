import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

const CreateAuthor = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState({
    id: "",
    name: "",
    birthDate: "",
    biography: "",
  });

  const validationSchema = Yup.object().shape({
    id: Yup.string()
      .matches(/^[0-9]/, "Invalid id is entered")
      .required("Id is required"),
    name: Yup.string()
      .matches(/^[A-Za-z0-9\s\-_,\.;:()]+$/, "Invalid Author name is entered")
      .required("Author Name is required"),
    birthDate: Yup.date().required("Date of Birth is required"),
    biography: Yup.string()
      .matches(/^[A-Za-z0-9\s\-_,\.;:()]+$/, "Invalid Biography is entered")
      .required("Biography is required"),
  });

  const formik = useFormik({
    initialValues: Data,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(
          `https://65f2dcf7105614e6549f217e.mockapi.io/authors`,
          values
        );
        alert("Author Created Successfully!!!");
        navigate("/authors");
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleCancel = () => {
    navigate("/authors");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card mt-5 mb-5  py-4" style={{ width: "50%" }}>
        <div className="card-header text-center">
          <h2>Add New Author</h2>
        </div>
        <div className="card-body cardbody">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Id :</label>
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
              <label className="col-sm-4 col-form-label">Author Name:</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <div className="text-danger">{formik.errors.name}</div>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">BirthDate:</label>
              <div className="col-sm-8">
                <input
                  type="date"
                  className="form-control"
                  name="birthDate"
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                />
                <div className="text-danger">{formik.errors.birthDate}</div>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Biography:</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="biography"
                  value={formik.values.biography}
                  onChange={formik.handleChange}
                />
                <div className="text-danger">{formik.errors.biography}</div>
              </div>
            </div>
            <br />

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

export default CreateAuthor;
