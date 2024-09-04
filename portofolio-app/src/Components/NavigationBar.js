import "../Styles/Navigation.css";
export default function Nav() {
  return (
    <div class="container" style={{ zIndex: 10 }}>
      <div class="navbar">
        <h2>
          <a href="#">Sharaf</a>
        </h2>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
