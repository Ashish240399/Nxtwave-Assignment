import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddResourceItem from "./components/AddResourceItemPage/AddResourceItem";
import Homepage from "./components/HomePage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/Register/Login";
import SignUp from "./components/Register/Register";
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
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
