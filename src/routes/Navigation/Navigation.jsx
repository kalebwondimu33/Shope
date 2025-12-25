import { Outlet, Link } from "react-router-dom";
import { selectIsCartOpen } from "../../store/cart/cartSelector.js";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/crown.svg?react";
import { signOutStart } from "../../store/user/userAction.js";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles.jsx";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";

import { selectCurrentUser } from "../../store/user/userSelector.js";
const Navigation = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const handleSignOut = () => dispatch(signOutStart());
  const currentUser = useSelector(selectCurrentUser);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth"> SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
