import LogoWhite from "../components/logo-white";

export default function SignUp() {
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
            <a href="">Get in touch!</a>
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
                <input type="email" placeholder="Your Email ID" />
              </div>
              <div className="input-div">
                <div className="input-heading">
                  <span>Password</span>
                  <span className="required"> *</span>
                </div>
                <input type="email" placeholder="Password" />
              </div>
              <div className="input-div">
                <div className="input-heading">
                  <span>Confirm Password</span>
                  <span className="required"> *</span>
                </div>
                <input type="email" placeholder="Password" />
              </div>
            </div>
            <div className="submit-div">
              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  