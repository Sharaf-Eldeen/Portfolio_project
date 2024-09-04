import "./App.css";
import ResponsiveAppBar from "./Components/NavigationBar.js";
import ToggleComponents from "./Components/ToggleComponent.js";
import Footer from "./Components/Footer.js";
import Projects from "./Components/Projects.js";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <ToggleComponents />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
