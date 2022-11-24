import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Formik() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      address: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "Username must be 10 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.number()
        .max(8, "Phone number must be 8 character")
        .required("Required"),
      company: Yup.string().required("Required"),
      website: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Name : </label>
          <input
            type="text"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username ? (
            <p className="error">{formik.errors.username}</p>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="phone">Phone : </label>
          <input
            type="number"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone ? (
            <p className="error">{formik.errors.phone}</p>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="company">Company : </label>
          <input
            type="text"
            id="company"
            value={formik.values.company}
            onChange={formik.handleChange}
          />
          {formik.errors.company ? (
            <p className="error">{formik.errors.company}</p>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="username">Website : </label>
          <input
            type="text"
            id="website"
            value={formik.values.website}
            onChange={formik.handleChange}
          />
          {formik.errors.website ? (
            <p className="error">{formik.errors.website}</p>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="address">Address : </label>
          <input
            type="text"
            id="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          {formik.errors.address ? (
            <p className="error">{formik.errors.address}</p>
          ) : null}
        </div>

        <button className="button" type="submit">
          Add Avatar
        </button>
      </form>
    </div>
  );
}
