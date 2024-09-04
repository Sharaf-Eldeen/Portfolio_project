import "../Styles/Footer.css";
import useScript from "../Hooks/useScript.js";
export default function Footer() {
  useScript("https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js");

  return (
    <footer class="footer-wrapper" id="contact">
      <ul class="social-icons">
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.facebook.com/mahmoud.sharf.12177/"
            target="_blanck"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://x.com/sharaf799"
            target="_blank"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.linkedin.com/in/mahmoud-sharaf-028243250/"
            target="_blanck"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://github.com/Sharaf-Eldeen"
            target="_blanck"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
      </ul>
    </footer>
  );
}
