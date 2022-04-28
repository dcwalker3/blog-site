import { React } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ShowAllPosts from '../Post/ShowAllPosts';
import FullPostViewer from '../Post/FullPostViewer';

import NavBar from '../NavBar';

import Signup from '../Login-Forms/Signup';
import Login from '../Login-Forms/Login';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Component CSS
import './StyleSheets/index.css';
import '../Login-Forms/StyleSheets/login-forms.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<ShowAllPosts/>} />
          <Route path="/post/" element={<FullPostViewer/>} />

          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
