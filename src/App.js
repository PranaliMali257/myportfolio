import logo from "./logo.svg";
import "./App.css";
import MyPortFolio from "./MyPortFolio";
import Home from "./Component/Home";
import Education from "./Component/Education";
import Experience from "./Component/Experience";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Skill from "./Component/Skill";
import Resume from "./Component/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <MyPortFolio />
      <section id="Home">
        <Home />
      </section>
       <section id="Education">
        <Education />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="Project">
        <Project />
      </section>
      <section id="Resume">
        <Resume />
      </section>
      <section id="Skill">
        <Skill />
      </section>
     <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
