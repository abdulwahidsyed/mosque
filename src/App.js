import logo from './logo.svg';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import Con from './Containers/Fillout/Fillout';
import Header from './Containers/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Con />
    </div>
  );
}

export default App;
