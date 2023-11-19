import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "@mui/material";
import Write from "../components/Typewrite";
import "../style/FindWorkIndivisual.css";
import styled from "styled-components";
import Footer from '../Pages/Footer'

const theme = {
  yellow: {
    default: "#ffc815",
    hover: "#eab60c",
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: black;
  padding: 5px 15px;
  width:16.3rem;
  height: 3.1rem;
  border: none;
  border-radius: 0.5rem;;
  outline: 0;
  font-weight;: bold
  font-size: 1rem;

  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "yellow",
};

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;

export default function Indivisual() {
  return (
    <>
      <Navbar />
      <div className="back">
        <b className="pageheading">
          Please fill out the following details for registration.
        </b>
        <div className="columns">
          <div className="column11">
            <div className="inputframe">
              <div className="inputlabels">Full Name</div>
              <input type="text" className="input-field" name="name" placeholder='Enter Name' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Email ID</div>
              <input type="email" className="input-field" name="email" placeholder='Email' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Choose a username</div>
              <input type="text" className="input-field" name="username" placeholder='Username' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Choose a password</div>
              <input type="password" className="input-field" name="password" placeholder='Password' />
              <div className="passwordlength">
                Choose a password between 4 and 12 characters
              </div>
            </div>
            <div className="inputframe">
              <div className="input-text-label">Confirm password</div>
              <input type="password" className="input-field" name="confirmpassword" placeholder='Re-enter password' />
            </div>
          </div>
          <div className="column22">
            <div className="inputframe">
              <div className="inputlabels">Phone no.</div>
              <input type="tel" className="input-field" name="phone" placeholder='Enter phone no.' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Aadhaar Card Number</div>
              <input type="tel" className="input-field" name="aadhaar" placeholder='Aadhaar' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Location</div>
              <input type="text" className="input-field" name="location" placeholder='Location' />
            </div>
            <div className="inputframe">
              <div className="button--container">
                <div className="button--child"></div>
                <a href="/">
                  <Button style={{ fontFamily: "Montserrat" }}>
                    Register
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">

      </div>

    </>
  );
}
