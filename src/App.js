import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <WorkExperience />
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
