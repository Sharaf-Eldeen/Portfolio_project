import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./Components/NavigationBar.js";
import About from "./Components/About.js";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <About />
    </div>
  );
}

export default App;
