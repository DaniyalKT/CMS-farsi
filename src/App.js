import Sidebar from "./Component/Sidebar/Sidebar";
import Header from "./Component/Header/Header";
import {useRoutes } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />

        {router}
      </div>
    </>
  );
}

export default App;
