import React from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import { Routes } from "../routes";
import "./style.css";

function Signup() {
  const navigate = useNavigate();
  return (
    <>
      <Header title="Register" />
      <div className="form">
        <div className="form-body">
          <div className="applicant_type">
            <label className="form__label" for="email">
              Applicant Type
            </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="user"
                value="user"
              />
              <label class="form-check-label" for="inlineRadio1">
                User
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="jobseeker"
                value="jobseeker"
              />
              <label class="form-check-label" for="inlineRadio2">
                Job Seeker
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="admin"
                value="admin"
              />
              <label class="form-check-label" for="inlineRadio3">
                Admin
              </label>
            </div>
          </div>
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
          <div className="lastname">
            <label className="form__label" for="lastName">
              Username{" "}
            </label>
            <input
              type="text"
              name=""
              id="username"
              className="form__input"
              placeholder="Enter Username"
            />
          </div>
          <div className="username">
            <label className="form__label" for="firstName">
              Mobilenumber{" "}
            </label>
            <input
              className="form__input"
              type="number"
              id="mobileNumber"
              placeholder="Enter Mobilenumber"
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
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
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
            Register
          </button>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          Already a user? <a href={Routes.LOGIN}> Login</a>
        </div>
      </div>
    </>
  );
}

export default Signup;
