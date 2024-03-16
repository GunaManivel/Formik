import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const EditAuthor = ({ id }) => {
  const navigate = useNavigate();
  const [editdata, setEditdata] = useState({
    id: "",
    name: "",
    birthDate: "",
    biography: "",
  });

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    formik.setValues(editdata);
  }, [editdata]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://65f2dcf7105614e6549f217e.mockapi.io/authors/${id}`
      );
      setEditdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };
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
    initialValues: {
      id: "",
      name: "",
      birthDate: "",
      biography: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await axios
        .put(
          `https://65f2dcf7105614e6549f217e.mockapi.io/authors/${id}`,
          values
        )
        .then((res) => alert("Data Updated Successfully!!!"))
        .catch((err) => console.log(err));
      navigate("/authors");
    },
  });

  const handleCancel = () => {
    navigate("/authors");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-3">
      <div className="card mt-4 mb-5 py-3" style={{ width: "50%" }}>
        <div className="card-header text-center">
          <h2>Edit Author Details</h2>
        </div>
        <div className="card-body">
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
              <label className="col-sm-4 col-form-label">Name :</label>
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
              <label className="col-sm-4 col-form-label">BirthDate :</label>
              <div className="col-sm-8">
                <input
                  type="text"
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
              <label className="col-sm-4 col-form-label">Biography :</label>
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

            <div className="d-flex justify-content-start">
              <button
                type="submit"
                className="btn  py-2"
                style={{ background: "#00DD00", color: "#fff" }}
              >
                Update
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

export default EditAuthor;
