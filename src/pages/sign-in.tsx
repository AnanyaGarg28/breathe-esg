import { useDispatch, useSelector } from "react-redux";
import LogoWhite from "../components/logo-white";
import { signInThunk } from "../redux/auth/authThunk";
import { useState } from "react";
import { setJWT, setUserData } from "../redux/auth/authSlice";
import { AppDispatch, RootState } from "../store";
import { Loading } from "../components/loading";
import { Navigate } from "react-router-dom";

/**
 * Sign-in page component.
 * Renders a sign-in form and handles user authentication.
 */
export default function SignIn() {
  const usedispatch: () => AppDispatch = useDispatch;
  const dispatch = usedispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const status = useSelector((state: RootState) => state.auth.status);

  /**
   * Retrieves the authorization status from the Redux store.
   * @returns {boolean} The authorization status.
   */
  const isAuthorized = useSelector(
    (state: RootState) => state.auth.isAuthorized
  );

  if (isAuthorized) return <Navigate to="/" />;

  return (
    <div className="authpage">
      <div className="welcome-div">
        <div className="welcome-text">Welcome to</div>
        <div className="auth-logo">
          <LogoWhite />
        </div>
        <div className="tagline">
          We help you track your organisations metrics as per the ESG Guidelines
        </div>
        <div className="get-in-touch">
          <span>Sounds Interesting?</span>
          <a href="/">Get in touch!</a>
        </div>
      </div>
      <div className="auth-div">
        <img className="globeImage" src="/images/globe-logo.png" alt="" />
        <div className="auth-box">
          <div className="heading-div">
            <div className="heading">Login</div>
            <div className="subtext">
              Enter your registered Email ID to continue
            </div>
          </div>
          <div className="input-container">
            <div className="input-div">
              <div className="input-heading">
                <span>Email</span>
                <span className="required"> *</span>
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email ID"
              />
            </div>
            <div className="input-div">
              <div className="input-heading">
                <span>Password</span>
                <span className="required"> *</span>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            {error && <div className="error-div">{error}</div>}
          </div>
          <div className="external-auth-container">
            <div className="external-auth-div">
              <img
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                alt=""
              />
              <span className="external-auth-text">Sign up with Google</span>
            </div>
            <div className="external-auth-div">
              <img src="/images/x-logo.png" alt="" />
              <span className="external-auth-text">Sign up with X</span>
            </div>
          </div>
          <div className="submit-div">
            <div className="contact-us">
              <span>Having trouble logging in? </span>
              <a href="/" className="contact-us-anchor">
                Contact Us
              </a>
            </div>
            <button
              onClick={() => {
                dispatch(
                  signInThunk({
                    email,
                    password,
                  })
                ).then((data: any) => {
                  if (data.payload.token) {
                    dispatch(setJWT(data.payload.token));
                    dispatch(setUserData(data.payload.user));
                  } else setError(data.payload.error);
                });
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      {status === "loading" && <Loading />}
    </div>
  );
}
