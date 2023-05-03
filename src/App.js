import ApplicationForm from "./pages/ApplicationForm/ApplicationForm";
import Apply from "./pages/Apply/Apply";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import MyJobs from "./pages/MyJobs/MyJobs";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Admin from "./pages/Admin/Admin";
import About from "./pages/About/About";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="apply" element={<Apply />} />
            <Route path="my-jobs" element={<MyJobs />} />
            <Route path="application-form" element={<ApplicationForm />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
