import LogoWhite from "../components/logo-white";
import { useDispatch, useSelector } from "react-redux";
import { signUpThunk } from "../redux/auth/authThunk";
import { useState } from "react";
import { setJWT, setUserData } from "../redux/auth/authSlice";
import { AppDispatch, RootState } from "../store";
import { Loading } from "../components/loading";
import { Navigate } from "react-router-dom";

/**
 * Sign up page component.
 * Allows users to sign up with their email and password.
 * If the user is already authorized, it redirects to the home page.
 */
export default function SignUp() {
  const usedispatch: () => AppDispatch = useDispatch;
  const dispatch = usedispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const status = useSelector((state: RootState) => state.auth.status);

  const isAuthorized = useSelector((state: RootState) => state.auth.isAuthorized);

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
            <div className="heading">Sign Up</div>
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
            <div className="input-div">
              <div className="input-heading">
                <span>Confirm Password</span>
                <span className="required"> *</span>
              </div>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            {error && <div className="error-div">{error}</div>}
          </div>
          <div className="submit-div">
            <button
              onClick={() => {
                if (password === confirmPassword) {
                  dispatch(
                    signUpThunk({
                      email,
                      password,
                    })
                  ).then((data: any) => {
                    if (data.payload.token) {
                      dispatch(setJWT(data.payload.token));
                      dispatch(setUserData());
                    } else setError(data.payload.error);
                  });
                } else {
                  setError("Passwords do not match");
                }
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
