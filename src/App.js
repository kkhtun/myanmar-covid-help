import {
  ApiContextProvider,
  ChartContextProvider,
} from "./components/context/ApiContext";
import AppWithRoutes from "./AppWithRoutes";
function App() {
  return (
    <div className="App">
      <ApiContextProvider>
        <ChartContextProvider>
          <AppWithRoutes />
        </ChartContextProvider>
      </ApiContextProvider>
    </div>
  );
}

export default App;
