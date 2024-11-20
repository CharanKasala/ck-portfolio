import './App.css';
import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import WorkExp from './components/WorkExp';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
//import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
    <div className="app-container container-fluid">
      <div className="row flex-nowrap">
        
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={ <Home/> }></Route>
          <Route path="/WorkExp" element={<WorkExp/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
        {/*  <Route path="/resume" element={<Resume/>}></Route> */}
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App;
