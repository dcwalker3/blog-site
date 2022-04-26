import { React, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import ShowAllPosts from '../Post/ShowAllPosts';
import FullPostViewer from '../Post/FullPostViewer';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ShowAllPosts/>} />
          <Route path="/post/" element={<FullPostViewer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
