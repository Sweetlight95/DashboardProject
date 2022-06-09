import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ".formik.css";
import Axios from "axios";

const AddUser = () => {
  const [userData, setUserData] = useState({});
  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      birthdate: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(6, "Must be 6 characters or less")
        .required("Required"),
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email addresss`").required("Required"),
      gender: Yup.string().oneOf(["Male", "Female"]).required("Required"),
      birthdate: Yup.date().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setUserData(values);
      // console.log
      Axios.post(
        "https://dummyapi.io/data/v1/user/create",
        { values },
        {
          headers: {
            "app-id": "629e74f9007a8808a4995bb2",
          },
        }
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h1> ADD USER </h1>
      <h4> Personal Details </h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gender}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {formik.touched.gender && formik.errors.gender ? (
          <div>{formik.errors.gender}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="birthdate">Date of Birth</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          placeholder="Select date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
        />
        {formik.touched.birthdate && formik.errors.birthdate ? (
          <div>{formik.errors.birthdate}</div>
        ) : null}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddUser