import Form from './pages/Form';
import Signup from './pages/Signup'
import Signup2 from './pages/Signup2';
import Sidebar from './pages/Sidebar';
import Home from './sidebarpages/Home'
import AboutUs from './sidebarpages/AboutUs'
import Student from './sidebarpages/Student'
import Teacher from './sidebarpages/Teacher'
import ContactUs from './sidebarpages/ContactUs'
import 'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">      
      <Router>
        <Routes>
        <Route path="/" element={<Form />} /> 
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Signup2" element={<Signup2/>} />
       <Route path="/Sidebar" element ={<Sidebar/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/student" element={<Student />} /> 
        <Route path="/Teacher" element={<Teacher/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
      </Router>
      </div>
  );
}
export default App;
