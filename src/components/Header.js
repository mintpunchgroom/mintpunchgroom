import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import useWindowSize from "../utility/useWindowSize";
import Logo from "./Logo";
import Text from "./Text";

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

const Icon = styled.div`
  i {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
  }
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
          <Link to="/">{text.header.nav.home}</Link>
          <Link to="/galery">{text.header.nav.galery}</Link>
          <Link to="/contacts">{text.header.nav.contact}</Link>
          <h4>
            <i class="fas fa-phone"></i> {text.phone}{" "}
          </h4>
        </Navigation>
      ) : (
        <div>
          {isMobileMenuOpen ? (
            <MobileMenu>
              <MobileMenuAction>
                <Logo onClick={() => setMobileMenuOpen(false)} />
                <Icon onClick={() => setMobileMenuOpen(false)}>
                  <i class="fas fa-times"></i>
                </Icon>
              </MobileMenuAction>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <MobileMenuItem>{text.header.nav.home}</MobileMenuItem>
              </Link>
              <Link to="/galery" onClick={() => setMobileMenuOpen(false)}>
                <MobileMenuItem>{text.header.nav.galery}</MobileMenuItem>
              </Link>
              <Link to="/contacts" onClick={() => setMobileMenuOpen(false)}>
                <MobileMenuItem>{text.header.nav.contact}</MobileMenuItem>
              </Link>
              <h3>
                <Text align="center">
                  <i class="fas fa-phone"></i> {text.phone}{" "}
                </Text>
              </h3>
            </MobileMenu>
          ) : (
            <Icon onClick={() => setMobileMenuOpen(true)}>
              <i class="fas fa-bars"></i>
            </Icon>
          )}
        </div>
      )}
    </Container>
  );
};

export default Header;
