// Layout Imports
import Navbar from "./components/layout/Navbar";
import MainWrapper from "./components/layout/MainWrapper";
import Footer from "./components/layout/Footer";
import { ApiContextProvider } from "./components/context/ApiContext";
// Pages Import
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <div className="App">
      <ApiContextProvider>
        <Navbar />
        <MainWrapper>
          <MainPage />
        </MainWrapper>
        <Footer />
      </ApiContextProvider>
    </div>
  );
}

export default App;
