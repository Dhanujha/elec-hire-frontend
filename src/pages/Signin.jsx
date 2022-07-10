import React from "react";
import { Router, useNavigate } from "react-router";
import Header from "../components/Header";
import { Routes } from "../routes";

function Signin() {
  const navigate = useNavigate();
  return (
    <>
      <Header title="Login" />
      <div className="form">
        <div className="form-body">
          <div className="email">
            <label className="form__label" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Enter Email"
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div class="footer">
          <button
            type="submit"
            class="btn"
            onClick={() => {
              navigate(Routes.DASHBOARD);
            }}
          >
            Login
          </button>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          New User/Admin? <a href={Routes.SIGNUP}> Sign Up</a>
        </div>
      </div>
    </>
  );
}

export default Signin;
