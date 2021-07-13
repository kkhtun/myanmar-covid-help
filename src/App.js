// Layout Imports
import Navbar from "./components/layout/Navbar";
import MainWrapper from "./components/layout/MainWrapper";
import Footer from "./components/layout/Footer";

// Pages Import
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainWrapper>
        <MainPage />
      </MainWrapper>
      <Footer />
    </div>
  );
}

export default App;
