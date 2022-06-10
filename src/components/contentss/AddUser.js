import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./formik.css";
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
      const requiredValues = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      };
      console.log(requiredValues);
      Axios.post(
        "https://dummyapi.io/data/v1/user/create",
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
        },
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
    },
  });
  return (
    <div
      style={{
        padding: "3rem 8rem 4rem 8rem",
        borderRadius: "13px",
        boxShadow: "0px 6.4px 13px rgba(0, 19, 88, 0.05",
        border: "1px solid #fff",
      }}
    >
      <h1 style={{ color: "#607485", fontWeight: "600", fontSize: "17px" }}>
        {" "}
        ADD USER{" "}
      </h1>
      <h4 style={{ color: "#607485", fontWeight: "600", fontSize: "9px" }}>
        {" "}
        Personal Details{" "}
      </h4>
      <form onSubmit={formik.handleSubmit}>
        <label
          htmlFor="title"
          style={{ color: "#051a2e", fontWeight: 600, fontSize: "11px" }}
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          style={{
            backgroundColor: "#fafcfe",
            borderRadius: "6px",
            border: "0.8px solid #dee6ed",
            color: "#97a7b4",
            fontWeight: "400",
            fontSize: "11px",
          }}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
        <label
          htmlFor="firstName"
          style={{ color: "#051a2e", fontWeight: 600, fontSize: "11px" }}
        >
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          style={{
            backgroundColor: "#fafcfe",
            borderRadius: "6px",
            border: "0.8px solid #dee6ed",
            color: "#97a7b4",
            fontWeight: "400",
            fontSize: "11px",
          }}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <label
          htmlFor="lastName"
          style={{ color: "#051a2e", fontWeight: 600, fontSize: "11px" }}
        >
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          style={{
            backgroundColor: "#fafcfe",
            borderRadius: "6px",
            border: "0.8px solid #dee6ed",
            color: "#97a7b4",
            fontWeight: "400",
            fontSize: "11px",
          }}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label
          htmlFor="gender"
          style={{ color: "#051a2e", fontWeight: 600, fontSize: "11px" }}
        >
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gender}
          style={{
            backgroundColor: "#fafcfe",
            borderRadius: "6px",
            border: "0.8px solid #dee6ed",
            color: "#97a7b4",
            fontWeight: "400",
            fontSize: "11px",
          }}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {formik.touched.gender && formik.errors.gender ? (
          <div>{formik.errors.gender}</div>
        ) : null}

        <label
          htmlFor="email"
          style={{ color: "#051a2e", fontWeight: 600, fontSize: "11px" }}
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{
            backgroundColor: "#fafcfe",
            borderRadius: "6px",
            border: "0.8px solid #dee6ed",
            color: "#97a7b4",
            fontWeight: "400",
            fontSize: "11px",
          }}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label
          htmlFor="birthdate"
          style={{ color: "#051a2e", fontWeight: 600, fontSize: "11px" }}
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          placeholder="Select date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
          style={{
            backgroundColor: "#fafcfe",
            borderRadius: "6px",
            border: "0.8px solid #dee6ed",
            color: "#97a7b4",
            fontWeight: "400",
            fontSize: "11px",
          }}
        />
        {formik.touched.birthdate && formik.errors.birthdate ? (
          <div>{formik.errors.birthdate}</div>
        ) : null}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddUser;
