import './App.css';
import About from './components/about';
import ContactUs from './components/contactus';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <Router>
      Heyy Its a router practise
      <Routes>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
