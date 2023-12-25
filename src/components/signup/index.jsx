import { useState } from "react";
import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import local_URL from "../../url/global";

import React from "react";

//state for data updation
const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //function for handle change

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  //handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${local_URL}/users`;
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign In
            </button>
          </Link>
        </div>
        <div className={styles.right} >


          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              onChange={handleChange}
              placeholder="First Name"
              name="firstName"
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              onChange={handleChange}
              placeholder="Last Name"
              name="lastName"
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              onChange={handleChange}
              placeholder="Email"
              name="email"
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              onChange={handleChange}
              placeholder="Password"
              name="password"
              value={data.password}
              required
              className={styles.input}
            />
            {/* <Link to="/forgot-password" style={{alignSelf:"flex-start"}}>
             <p style={{padding:"0 15px"}}> Forgot Password ? </p>
            </Link> */}
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
