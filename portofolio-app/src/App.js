import "./App.css";
import ResponsiveAppBar from "./Components/NavigationBar.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
