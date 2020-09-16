import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "react-awesome-slider/dist/styles.css";

/* Layout Components */
import Page from "./components/Page";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* Pages */
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Page>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/galery">
            <GalleryPage />
          </Route>
          <Route path="/contacts">
            <ContactPage />
          </Route>
        </Switch>
      </Page>
      <Footer />
    </Router>
  );
}

export default App;
