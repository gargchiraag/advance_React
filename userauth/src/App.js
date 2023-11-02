import Login from "./components/login"
import Signup from "./components/signup";
import { BrowserRouter as Routers , Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
    <Routers>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Routers>
    </div>
  );
}

export default App;
