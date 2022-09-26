import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import Login from "./Login-Signup-Forms/Login";
import Signup from "./Login-Signup-Forms/Signup";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/secret" element={
            <PrivateRoute user={false}>
              <Secret />
            </PrivateRoute>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

function Home(){
  return(
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Secret(){
  return(
    <div>
      <h1>Secret</h1>
    </div>
  );
}

function PrivateRoute({children}, user){
  return user ? children : <Navigate to="/login" />;
}

export default App;
