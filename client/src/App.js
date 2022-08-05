import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddResourceItem from "./components/AddResourceItemPage/AddResourceItem";
import Homepage from "./components/HomePage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Resourcepage from "./components/ResourcePage/Resourcepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body-container">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/resource-details" element={<Resourcepage />}></Route>
          <Route path="/add-item" element={<AddResourceItem />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
