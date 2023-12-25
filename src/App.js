import { Route,Routes, Navigate } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Main from "./components/main";
import ForgotPassword from "./components/forgotPassword";
import PasswordReset from "./components/passwordResetPage";


function App() {

  const user  = localStorage.getItem("token")
  return (
    <>
    <Routes>
     {user && <Route path="/" element={<Main/>}/> }
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/password-reset/:id/:token" element={<PasswordReset/>}/>
    </Routes>
    </>
  );
}

export default App;
