import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import TopContainer from "./components/Header/TopContainer/TopContainer";
import ProjectContainer from "./components/ProjectsContainer/ProjectContainer";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import ScrollButton from "./components/ScrollButton";
function App() {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <Contact/>
      <ScrollButton/>
    </div>
  );
}

export default App;
