import Footers from "./components/Footer";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import CardInfo from "./components/CardInfo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<CardInfo />}></Route>
      </Routes>
      <Footers />
    </>
  );
}

export default App;
