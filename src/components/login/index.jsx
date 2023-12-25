import { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import local_URL from "../../url/global";

import React from "react";

//state for data updation
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  //function for handle change

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  //handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${local_URL}/auth`;
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to your  Account</h1>
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
            {error && <div className={styles.error_msg}>{error}</div>}
            <Link to="/forgot-password" style={{alignSelf:"flex-start"}}>
             <p style={{padding:"0 15px"}}> Forgot Password ? </p>
            </Link>
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>

        <div className={styles.right} >
        <h1>New Here ? </h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
