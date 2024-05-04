import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
