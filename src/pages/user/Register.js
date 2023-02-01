import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState();
  const [validName, setValidName] = useState(false);
  const [userForcus, setUserForcus] = useState(false);
  
  return (
    <div className="signup__container">
      <div className="container__child signup__thumbnail">
        <div className="thumbnail__logo">
          <img src="../assets/image/logo.png" alt="" />
        </div>
        <div className="thumbnail__content text-center">
          <h1 className="heading--primary">Welcome to Beauty</h1>
        </div>
        <div className="signup__overlay"></div>
      </div>
      <div className="container__child signup__form">
        <form action="#">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              placeholder="james.bond"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="james.bond@spectre.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="********"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordRepeat">Repeat Password</label>
            <input
              className="form-control"
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              placeholder="********"
              required
            />
          </div>
          <div className="m-t-lg">
            <ul className="list-inline">
              <li>
                <input
                  className="btn btn--form"
                  type="submit"
                  value="Register"
                />
              </li>
            </ul>
            <Link className="signup__link" to={"/login"}>
              Đã có tài khoản
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
