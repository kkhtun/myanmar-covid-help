// Context API imports
import {
  ApiContextProvider,
  ChartContextProvider,
} from "./components/context/ApiContext";
import { ServicesContextProvider } from "./components/context/ServicesContext";
import AppWithRoutes from "./AppWithRoutes";
function App() {
  return (
    <div className="App">
      <ApiContextProvider>
        <ChartContextProvider>
          <ServicesContextProvider>
            <AppWithRoutes />
          </ServicesContextProvider>
        </ChartContextProvider>
      </ApiContextProvider>
    </div>
  );
}

export default App;
