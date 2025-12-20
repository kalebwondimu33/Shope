import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import Logo from "../../assets/crown.svg?react";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles.jsx";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import { CardDropContext } from "../../context/CardDropContext";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { open } = useContext(CardDropContext);
  console.log(currentUser);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth"> SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {open && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
