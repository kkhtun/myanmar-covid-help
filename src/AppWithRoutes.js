import React from "react";
// Pages Import
import MainPage from "./components/pages/MainPage";
import ChartPage from "./components/pages/ChartPage";
import ServicesPage from "./components/pages/ServicesPage";
import ServiceItemPage from "./components/pages/ServiceItemPage";
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
          <Route path="/" exact component={ServicesPage} />
          <Route path="/service-item" component={ServiceItemPage} />
          <Route path="/stats" component={MainPage} />
          <Route path="/charts" component={ChartPage} />
        </MainWrapper>
        <Footer />
      </Router>
    </div>
  );
};

export default AppWithRoutes;
