import "./App.css";
import Profile from "./Profile";
import img1 from "./assets/7.jpg";
import img2 from "./assets/7.jpg";
import img3 from "./assets/7.jpg";
import img4 from "./assets/7.jpg";
import img5 from "./assets/7.jpg";

function App() {
  return (
    <div className="main1">
      <Profile
        image={img1}
        name="Madhu"
        designation="Frontend Developer"
        skill={["HTML", "CSS", "Javascript", "React", "Angular", "Node"]}
      />
      <Profile
        image={img2}
        name="Medha"
        designation="Backend Developer"
        skill={["Java", "Springboot", "Mysql", "Git", "Cloud", "API"]}
      />
      <Profile
        image={img3}
        name="Akshaya"
        designation="Software Developer"
        skill={["Javascript", "DSA", "SDLC"]}
      />
      <Profile
        image={img4}
        name="Janani"
        designation="Fullstack Developer"
        skill={[
          "HTML",
          "CSS",
          "Javascript",
          "React",
          "Angular",
          "Node",
          "Azure",
        ]}
      />
      <Profile
        image={img5}
        name="Pooja"
        designation="Mernstack Developer"
        skill={["HTML", "CSS", "Javascript", "React", "Angular", "Node"]}
      />
    </div>
  );
}

export default App;
