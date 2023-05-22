import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/NavBar';

//pages 
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import About from './pages/About';
import Contact from './pages/Contact'
import AllCourses from './pages/AllCourses';
import CourseDetails from './pages/CourseDetails';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course/details" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
