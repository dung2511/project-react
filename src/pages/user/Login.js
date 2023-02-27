import React, { useEffect, useState } from "react";
import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { UserAuth } from "../../component/reducer/AuthContext";
const Login = () => {
  document.title = "Đăng nhập";
  const navigate = useNavigate();
  const { user,googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=> {
    if(user) {
      navigate("/")
    }
  })
  return (
    <div className="align">
      <div className="grid">
        <form className="form login">
          <div className="form__field">
            <label htmlFor="login__username">
              <FaUser />

              <span className="hidden">Username</span>
            </label>
            <input
              autoComplete="username"
              id="login__username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Tên đăng nhập"
              required
            />
          </div>

          <div className="form__field">
            <label htmlFor="login__password">
              <FaLock />

              <span className="hidden">Password</span>
            </label>
            <input
              id="login__password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Mật khẩu"
              required
            />
          </div>

          <div className="form__field">
            <input type="submit" value="Đăng nhập" />
          </div>
        </form>

        <p className="text--center">
          Bạn chưa có tài khoản ?<Link to={`/register`}> Đăng ký ngay</Link>{" "}
          <svg className="icon"></svg>
        </p>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Login;
