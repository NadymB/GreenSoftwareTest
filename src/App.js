import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes";
import { Home } from "./pages";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {publicRoute.map((route, index) =>{
          if(route.component === Home) {
            return <Route key={index} path={route.path} element={<route.component />}/>
          } else {
            return <Route key={index} path={route.path} element={<route.component />} />
          }
        })}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
