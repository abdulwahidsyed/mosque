import logo from "./logo.svg";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import Fillout from "./Containers/Fillout/Fillout";
import Header from "./components/Header/Header";
import { useState } from "react";
import SideNav from "./components/SideNav/SideNav";

function App() {
  const [sideNav, setSideNav] = useState(false);
  const hamClick = () => {
    setSideNav(true);
  };
  return (
    <div className="App">
      {sideNav ? (
        <SideNav closeSideNav={() => setSideNav(false)} />
      ) : (
        <Header hamClick={hamClick} />
      )}
      <div className="rotate"></div>
      <Fillout />
    </div>
  );
}

export default App;
