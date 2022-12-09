import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../Button/button.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "./../../utils/firebase.utils";

import "./signin-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SigninForm = () => {
  let [formFields, setFormFields] = useState(defaultFormFields);
  let { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };
  return (
    <div className="signin-container">
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <p>OR</p>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
