export default function SignIn() {
  return (
    <div className="signin">
      <div className="welcome-div">
        <div className="welcome-text">Welcome to</div>
        <div className="logo">
          <img src="/images/logo-horizontal.png" alt="logo" />
          <img src="/images/mask-group.png" className="text-logo" />
        </div>
        <div className="tagline">
          We help you track your organisations metrics as per the ESG Guidelines
        </div>
        <div className="get-in-touch">
          <span>Sounds Interesting?</span>
          <a href="">Get in touch!</a>
        </div>
      </div>
      <div className="signin-div">
        <img className="globeImage" src="/images/globe-logo.png" alt="" />
        <div className="signin-box">
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
              <input type="email" placeholder="Your Email ID" />
            </div>
            <div className="input-div">
              <div className="input-heading">
                <span>Password</span>
                <span className="required"> *</span>
              </div>
              <input type="email" placeholder="Password" />
            </div>
          </div>
          <div className="external-signin-container">
            <div className="external-signin-div">
                <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="" />
                <span className="external-signin-text">Sign up with Google</span>
            </div>
            <div className="external-signin-div">
                <img src="/images/x-logo.png" alt="" />
                <span className="external-signin-text">Sign up with X</span>
            </div>
          </div>
          <div className="submit-div">
            <div className="contact-us">
                <span>Having trouble logging in? </span>
                <a href="" className="contact-us-anchor">Contact Us</a>
            </div>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
