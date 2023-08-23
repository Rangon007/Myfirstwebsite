import logo from "./logo.svg";
import "./App.css";
import Myproject from "./Myproject";

function App() {
  return (
    <div className="appcontainer">
      <div className="contentcontainer">
        <h1> My-website</h1>
        <h2> My-projects</h2>

        <Myproject />
      </div>
    </div>
  );
}

export default App;
