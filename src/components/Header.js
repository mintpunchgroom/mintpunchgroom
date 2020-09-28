import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import useWindowSize from "../utility/useWindowSize";
import Logo from "./Logo";
import Text from "./Text";
import Icon from "./Icon";

import phone from "../assets/icons/telephone.svg";
import menu from "../assets/icons/menu.svg";
import cancel from "../assets/icons/cancel.svg";

import text from "../text";

const Container = styled.header`
  height: 60px;
  padding: 0 20px;
  background: ${(props) => props.theme.bgAlt};
  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: currentColor;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: currentColor;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    margin-left: 20px;
  }
`;

const NavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;

  height: 60px;

  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  &.selected {
    border-bottom: 3px solid ${(props) => props.theme.primary};
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  z-index: 300;
  top: 0;
  left: 0;
  right: 0;

  height: 100vh;

  padding: 0 20px;

  background-color: ${(props) => props.theme.bgAlt};
`;

const MobileMenuAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  height: 60px;
`;

const MobileMenuItem = styled.div`
  padding: 1rem 0;
  text-align: center;
`;

const Header = () => {
  const width = useWindowSize().width;
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [width]);

  return (
    <Container>
      <Logo />
      {width > 720 ? (
        <Navigation>
          <NavItem exact activeClassName="selected" to="/">
            {text.header.nav.home}
          </NavItem>
          <NavItem activeClassName="selected" to="/galery">
            {text.header.nav.galery}
          </NavItem>
          <NavItem activeClassName="selected" to="/price">
            {text.header.nav.price}
          </NavItem>
          <NavItem activeClassName="selected" to="/contacts">
            {text.header.nav.contact}
          </NavItem>
          <h4>
            <Icon src={phone} alt="Corgi icon" /> {text.phone}{" "}
          </h4>
        </Navigation>
      ) : (
        <div>
          {isMobileMenuOpen ? (
            <MobileMenu>
              <MobileMenuAction>
                <Logo onClick={() => setMobileMenuOpen(false)} />
                <Icon onClick={() => setMobileMenuOpen(false)} src={cancel} />
              </MobileMenuAction>
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                <MobileMenuItem>{text.header.nav.home}</MobileMenuItem>
              </NavLink>
              <NavLink to="/galery" onClick={() => setMobileMenuOpen(false)}>
                <MobileMenuItem>{text.header.nav.galery}</MobileMenuItem>
              </NavLink>
              <NavLink to="/price" onClick={() => setMobileMenuOpen(false)}>
                <MobileMenuItem>{text.header.nav.price}</MobileMenuItem>
              </NavLink>
              <NavLink to="/contacts" onClick={() => setMobileMenuOpen(false)}>
                <MobileMenuItem>{text.header.nav.contact}</MobileMenuItem>
              </NavLink>
              <h3>
                <Text align="center">
                  <Icon src={phone} alt="Corgi icon" /> {text.phone}{" "}
                </Text>
              </h3>
            </MobileMenu>
          ) : (
            <Icon onClick={() => setMobileMenuOpen(true)} src={menu} />
          )}
        </div>
      )}
    </Container>
  );
};

export default Header;
