import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import Logo from "../../assets/crown.svg?react";
import "./navigation.styles.scss";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../cart-dropdown/CartDropDown";
import { CardDropContext } from "../../context/CardDropContext";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { open } = useContext(CardDropContext);
  console.log(currentUser);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <Logo />
          </div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              {" "}
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {open && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
