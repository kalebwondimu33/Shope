import SignUp from "../../components/signup/SignUp.component";
import SignIn from "../../components/signin/SignIn";
import "./auth.styels.scss";
const Autentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Autentication;
