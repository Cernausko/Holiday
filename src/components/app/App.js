import { Header } from "../header/Header";
import { Login } from "../loginForm/LoginForm";
import { Register } from "../registerForm/RegisterForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from "../main/Main";
import Reset from "../resetForm/ResetForm";
import Photo from "../Image/Image";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path ="/password-reset" element={<Reset/>}/>
           <Route path ="/main" element={<Main/>}/>
           <Route path="/delete-photo/:id" element={<Photo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
