// Context API imports
import {
  ApiContextProvider,
  ChartContextProvider,
} from "./components/context/ApiContext";
import {
  ServicesContextProvider,
  ServiceTypesContextProvider,
} from "./components/context/ServicesContext";
import AppWithRoutes from "./AppWithRoutes";
function App() {
  return (
    <div className="App">
      <ApiContextProvider>
        <ChartContextProvider>
          <ServicesContextProvider>
            <ServiceTypesContextProvider>
              <AppWithRoutes />
            </ServiceTypesContextProvider>
          </ServicesContextProvider>
        </ChartContextProvider>
      </ApiContextProvider>
    </div>
  );
}

export default App;
