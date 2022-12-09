import SignupForm from "../signup-form/signup-form.component";
import SigninForm from "../signin-form/signin-form.component";

import "./auth.styles.scss";
const Auth = () => {
  return (
    <div className="auth-container">
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default Auth;
