import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../Components/Home/Footer";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import Loader from "../Components/Home/ShowProduct/CardLoader";

const Login = () => {
  const { loading, loginUser, isAuthenticated } = useAuthContext();
  const [showAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await loginUser(email, password);
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Login failed");
      setShowAlert(true);
      setEmail("");
      setPassword("");
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <StyledWrapper>
          <div className="card">
            <input
              defaultValue
              className="blind-check"
              type="checkbox"
              id="blind-input"
              name="blindcheck"
              hidden
            />
            <label htmlFor="blind-input" className="blind_input">
              <span className="hide">Hide</span>
              <span className="show">Show</span>
            </label>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="title">Login In</div>
              {showAlert && <p className="text-red-700 text-xl">{errorMsg}</p>}
              <label className="label_input" htmlFor="email-input">
                Email
              </label>
              <input
                placeholder="Email"
                spellCheck="false"
                className="input"
                type="email"
                name="email"
                value={email}
                id="email-input"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="frg_pss">
                <label className="label_input" htmlFor="password-input">
                  Password
                </label>
                <a href="#">Forgot password?</a>
              </div>
              <input
                placeholder="Password"
                spellCheck="false"
                className="input"
                type="text"
                name="password"
                id="password-input"
                value={password}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="submit" type="button" onClick={login}>
                Submit
              </button>
            </form>
            <label htmlFor="blind-input" className="avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={35}
                height={35}
                viewBox="0 0 64 64"
                id="monkey"
              >
                <ellipse cx="53.7" cy={33} rx="8.3" ry="8.2" fill="#89664c" />
                <ellipse cx="53.7" cy={33} rx="5.4" ry="5.4" fill="#ffc5d3" />
                <ellipse cx="10.2" cy={33} rx="8.2" ry="8.2" fill="#89664c" />
                <ellipse cx="10.2" cy={33} rx="5.4" ry="5.4" fill="#ffc5d3" />
                <g fill="#89664c">
                  <path d="m43.4 10.8c1.1-.6 1.9-.9 1.9-.9-3.2-1.1-6-1.8-8.5-2.1 1.3-1 2.1-1.3 2.1-1.3-20.4-2.9-30.1 9-30.1 19.5h46.4c-.7-7.4-4.8-12.4-11.8-15.2" />
                  <path d="m55.3 27.6c0-9.7-10.4-17.6-23.3-17.6s-23.3 7.9-23.3 17.6c0 2.3.6 4.4 1.6 6.4-1 2-1.6 4.2-1.6 6.4 0 9.7 10.4 17.6 23.3 17.6s23.3-7.9 23.3-17.6c0-2.3-.6-4.4-1.6-6.4 1-2 1.6-4.2 1.6-6.4" />
                </g>
                <path
                  d="m52 28.2c0-16.9-20-6.1-20-6.1s-20-10.8-20 6.1c0 4.7 2.9 9 7.5 11.7-1.3 1.7-2.1 3.6-2.1 5.7 0 6.1 6.6 11 14.7 11s14.7-4.9 14.7-11c0-2.1-.8-4-2.1-5.7 4.4-2.7 7.3-7 7.3-11.7"
                  fill="#e0ac7e"
                />
                <g fill="#3b302a" className="monkey-eye-nose">
                  <path d="m35.1 38.7c0 1.1-.4 2.1-1 2.1-.6 0-1-.9-1-2.1 0-1.1.4-2.1 1-2.1.6.1 1 1 1 2.1" />
                  <path d="m30.9 38.7c0 1.1-.4 2.1-1 2.1-.6 0-1-.9-1-2.1 0-1.1.4-2.1 1-2.1.5.1 1 1 1 2.1" />
                  <ellipse
                    cx="40.7"
                    cy="31.7"
                    rx="3.5"
                    ry="4.5"
                    className="monkey-eye-r"
                  />
                  <ellipse
                    cx="23.3"
                    cy="31.7"
                    rx="3.5"
                    ry="4.5"
                    className="monkey-eye-l"
                  />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={35}
                height={35}
                viewBox="0 0 64 64"
                id="monkey-hands"
              >
                <path
                  fill="#89664C"
                  d="M9.4,32.5L2.1,61.9H14c-1.6-7.7,4-21,4-21L9.4,32.5z"
                />
                <path
                  fill="#FFD6BB"
                  d="M15.8,24.8c0,0,4.9-4.5,9.5-3.9c2.3,0.3-7.1,7.6-7.1,7.6s9.7-8.2,11.7-5.6c1.8,2.3-8.9,9.8-8.9,9.8
      s10-8.1,9.6-4.6c-0.3,3.8-7.9,12.8-12.5,13.8C11.5,43.2,6.3,39,9.8,24.4C11.6,17,13.3,25.2,15.8,24.8"
                />
                <path
                  fill="#89664C"
                  d="M54.8,32.5l7.3,29.4H50.2c1.6-7.7-4-21-4-21L54.8,32.5z"
                />
                <path
                  fill="#FFD6BB"
                  d="M48.4,24.8c0,0-4.9-4.5-9.5-3.9c-2.3,0.3,7.1,7.6,7.1,7.6s-9.7-8.2-11.7-5.6c-1.8,2.3,8.9,9.8,8.9,9.8
      s-10-8.1-9.7-4.6c0.4,3.8,8,12.8,12.6,13.8c6.6,1.3,11.8-2.9,8.3-17.5C52.6,17,50.9,25.2,48.4,24.8"
                />
              </svg>
            </label>
          </div>
        </StyledWrapper>
      )}
      <Footer />
    </>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  .card {
    --p: 32px;
    --h-form: auto;
    --w-form: 380px;
    --input-px: 0.75rem;
    --input-py: 0.65rem;
    --submit-h: 38px;
    --blind-w: 64px;
    --space-y: 0.5rem;
    width: var(--w-form);
    height: var(--h-form);
    max-width: 100%;
    border-radius: 16px;
    background: white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    overflow-y: auto;
    padding: var(--p);
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
    -webkit-user-select: none;
    user-select: none;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  .avatar {
    --sz-avatar: 166px;
    order: 0;
    width: var(--sz-avatar);
    min-width: var(--sz-avatar);
    max-width: var(--sz-avatar);
    height: var(--sz-avatar);
    min-height: var(--sz-avatar);
    max-height: var(--sz-avatar);
    border: 1px solid #707070;
    border-radius: 9999px;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
    perspective: 80px;
    position: relative;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    --sz-svg: calc(var(--sz-avatar) - 10px);
  }
  .avatar svg {
    position: absolute;
    transition: transform 0.2s ease-in, opacity 0.1s;
    transform-origin: 50% 100%;
    height: var(--sz-svg);
    width: var(--sz-svg);
    pointer-events: none;
  }
  .avatar svg#monkey {
    z-index: 1;
  }
  .avatar svg#monkey-hands {
    z-index: 2;
    transform-style: preserve-3d;
    transform: translateY(calc(var(--sz-avatar) / 1.25)) rotateX(-21deg);
  }

  .avatar::before {
    content: "";
    border-radius: 45%;
    width: calc(var(--sz-svg) / 3.889);
    height: calc(var(--sz-svg) / 5.833);
    border: 0;
    border-bottom: calc(var(--sz-svg) * (4 / 100)) solid #3c302a;
    bottom: 20%;

    position: absolute;
    transition: all 0.2s ease;
    z-index: 3;
  }
  .blind-check:checked ~ .avatar::before {
    width: calc(var(--sz-svg) * (9 / 100));
    height: 0;
    border-radius: 50%;
    border-bottom: calc(var(--sz-svg) * (10 / 100)) solid #3c302a;
  }
  .avatar svg#monkey .monkey-eye-r,
  .avatar svg#monkey .monkey-eye-l {
    animation: blink 10s 1s infinite;
    transition: all 0.2s ease;
  }
  @keyframes blink {
    0%,
    2%,
    4%,
    26%,
    28%,
    71%,
    73%,
    100% {
      ry: 4.5;
      cy: 31.7;
    }
    1%,
    3%,
    27%,
    72% {
      ry: 0.5;
      cy: 30;
    }
  }
  .blind-check:checked ~ .avatar svg#monkey .monkey-eye-r,
  .blind-check:checked ~ .avatar svg#monkey .monkey-eye-l {
    ry: 0.5;
    cy: 30;
  }
  .blind-check:checked ~ .avatar svg#monkey-hands {
    transform: translate3d(0, 0, 0) rotateX(0deg);
  }
  .avatar svg#monkey,
  .avatar::before,
  .avatar svg#monkey .monkey-eye-nose,
  .avatar svg#monkey .monkey-eye-r,
  .avatar svg#monkey .monkey-eye-l {
    transition: all 0.2s ease;
  }
  .blind-check:checked ~ .form:focus-within ~ .avatar svg#monkey,
  .blind-check:checked ~ .form:focus-within ~ .avatar::before,
  .blind-check:checked
    ~ .form:focus-within
    ~ .avatar
    svg#monkey
    .monkey-eye-nose,
  .blind-check:checked ~ .form:focus-within ~ .avatar svg#monkey .monkey-eye-r,
  .blind-check:checked ~ .form:focus-within ~ .avatar svg#monkey .monkey-eye-l {
    animation: none;
  }
  .form:focus-within ~ .avatar svg#monkey {
    animation: slick 3s ease infinite 1s;
    --center: rotateY(0deg);
    --left: rotateY(-4deg);
    --right: rotateY(4deg);
  }
  .form:focus-within ~ .avatar::before,
  .form:focus-within ~ .avatar svg#monkey .monkey-eye-nose,
  .blind-check:not(:checked)
    ~ .form:focus-within
    ~ .avatar
    svg#monkey
    .monkey-eye-r,
  .blind-check:not(:checked)
    ~ .form:focus-within
    ~ .avatar
    svg#monkey
    .monkey-eye-l {
    ry: 3;
    cy: 35;
    animation: slick 3s ease infinite 1s;
    --center: translateX(0);
    --left: translateX(-0.5px);
    --right: translateX(0.5px);
  }
  @keyframes slick {
    0%,
    100% {
      transform: var(--center);
    }
    25% {
      transform: var(--left);
    }
    75% {
      transform: var(--right);
    }
  }

  .card label.blind_input {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    z-index: 4;
    position: absolute;
    border: none;
    right: calc(var(--p) + (var(--input-px) / 2));
    bottom: calc(
      var(--p) + var(--submit-h) + var(--space-y) + (var(--input-py) / 1) + 3px
    );
    padding: 4px 0;
    width: var(--blind-w);
    border-radius: 4px;
    background-color: #fff;
    color: #4d4d4d;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .card label.blind_input:before {
    content: "";
    position: absolute;
    left: calc((var(--input-px) / 2) * -1);
    top: 0;
    height: 100%;
    width: 1px;
    background: #8f8f8f;
  }
  .card label.blind_input:hover {
    color: #262626;
    background-color: #f2f2f2;
  }
  .blind-check ~ label.blind_input span.show,
  .blind-check:checked ~ label.blind_input span.hide {
    display: none;
  }
  .blind-check ~ label.blind_input span.hide,
  .blind-check:checked ~ label.blind_input span.show {
    display: block;
  }

  .form {
    order: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
  }

  .form .title {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-top: 0;
    padding-bottom: 1rem;
    color: rgba(0, 0, 0, 0.7);
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  }

  .form .label_input {
    white-space: nowrap;
    font-size: 1rem;
    margin-top: calc(var(--space-y) / 2);
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
    display: inline;
    text-align: left;
    margin-right: auto;
    position: relative;
    z-index: 99;
    -webkit-user-select: none;
    user-select: none;
  }

  .form .input {
    resize: vertical;
    background: white;
    border: 1px solid #8f8f8f;
    border-radius: 6px;
    outline: none;
    padding: var(--input-py) var(--input-px);
    font-size: 18px;
    width: 100%;
    color: #000000b3;
    margin: var(--space-y) 0;
    transition: all 0.25s ease;
  }
  .form .input#password-input {
    padding-right: calc(var(--blind-w) + var(--input-px) + 4px);
  }
  .form .input:focus {
    border: 1px solid #60a5fa;
    outline: none;
    box-shadow: 0 0 0 2px #60a5fa;
  }
  .form .frg_pss {
    width: 100%;
    display: inline-flex;
    align-items: center;
  }
  .form .frg_pss a {
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    transition: color 0.25s ease;
    color: #000000b3;
    font-weight: 500;
    float: right;
  }
  .form .frg_pss a:hover {
    color: #000;
  }

  .form .submit {
    height: var(--submit-h);
    width: 100%;
    outline: none;
    cursor: pointer;
    background-color: #fff;
    background-image: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 0.09) 0%,
      rgba(17, 17, 17, 0.04) 100%
    );
    border: 1px solid rgba(22, 22, 22, 0.2);
    font-weight: 500;
    letter-spacing: 0.25px;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    -webkit-appearance: button;
    appearance: button;
    margin: var(--space-y) 0 0;
  }
  .form .submit:hover {
    background-image: linear-gradient(
      -180deg,
      rgb(90, 160, 239) 0%,
      #60a5fa 100%
    );
    border: 1px solid rgba(22, 22, 22, 0.2);
    color: #111;
  }

  .blind-check:checked ~ .form .input[type="text"] {
    /* text-emphasis: circle; */
    -webkit-text-security: disc;
  }
`;

export default Login;
