import React from "react";
// Pages Import
import MainPage from "./components/pages/MainPage";
import ChartPage from "./components/pages/ChartPage";

// Layout Imports
import Navbar from "./components/layout/Navbar";
import MainWrapper from "./components/layout/MainWrapper";
import Footer from "./components/layout/Footer";

// Router Imports
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppWithRoutes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <MainWrapper>
          <Route path="/" exact component={MainPage} />
          <Route path="/charts" component={ChartPage} />
        </MainWrapper>
        <Footer />
      </Router>
    </div>
  );
};

export default AppWithRoutes;
