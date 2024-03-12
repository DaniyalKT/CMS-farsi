import Sidebar from "./Component/Sidebar/Sidebar";
import Header from "./Component/Header/Header";
import './App.css'
function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
       <Header />
       {/* Router */}
      </div>
    </>
  );
}

export default App;
