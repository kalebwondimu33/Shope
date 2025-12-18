import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../FormInput/FormInput";
import Button from "../button/Button";
const defaultFormField = {
  email: "",
  password: "",
};
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;
  console.log(formField);
  const resetFormFields = () => {
    setFormField(defaultFormField);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;

        case "auth/user-not-found":
          alert("No user associated with this email");
          break;

        case "auth/invalid-email":
          alert("Invalid email format");
          break;

        default:
          console.error(error);
          alert(error.message);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle} type="button">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
