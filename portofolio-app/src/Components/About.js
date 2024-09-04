import "../Styles/About.css";
import ColorButtons from "./Button.js";
export default function Cover() {
  return (
    <>
      <div className="Container">
        <div>
          <h1>About</h1>
          <h4>
            Seeking an internship as a Software Engineer with a focus on MERN
            Stack development, where I can apply my skills in building dynamic,
            full-stack web applications and further enhance my expertise in
            Node.js, Express, React, and MongoDB.{" "}
          </h4>
        </div>
        <ColorButtons />
      </div>
    </>
  );
}
