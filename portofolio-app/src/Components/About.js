import "../Styles/About.css";
import photo from "../image.png";
import ColorButtons from "./Button.js";
export default function About() {
  return (
    <>
      <div className="Container">
        <div>
          <img src={photo} width={100}></img>
        </div>
        <div>
          <h2>Hello, its Me Mahmoud Reda And I'm a Full Stack Developer</h2>
          <p>
            {" "}
            I'm a student eager to become a software engineer through learning
            web development. Seeking training opportunities to refine my skills
            in this field. I'm passionate about learning and committed to
            achieving proficiency in web development
          </p>
        </div>
        <ColorButtons />
      </div>
    </>
  );
}
