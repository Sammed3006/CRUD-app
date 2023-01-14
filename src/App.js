
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from "./components/pages/About"
import Navbar from "./components/pages/Navbar"
import { BrowserRouter as Router ,Route,Routes,Link } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/Users/AddUsers';
import EditUser from './components/Users/EditUser';
import View from './components/Users/View';


function App() {
  return (
    <Router>
      <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/users/add" element={<AddUser/>}/>
      <Route exact path="/users/edit/:id" element={<EditUser/>}/>
      <Route exact path="/users/:id" element={<View/>}/>
      <Route  element={<NotFound/>}/>
      
    </Routes>

  </div>
    </Router>
  );
}

export default App;
