import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './styles/css/style.css';
import NavBar from "./components/Ui/NavBar";
import OurBlogPage from "./components/pages/OurBlogPage";
import MainPage from "./components/pages/MainPage";
import WorksPage from "./components/pages/WorksPage";
import ContactsPage from './components/pages/ContactsPage'
import PostPage from "./components/pages/PostPage";

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
  
        <Route path="/freelance-website/main" element={<MainPage/>}/>
        <Route path="/freelance-website/blog" element={<OurBlogPage/>}/>
        <Route path="/freelance-website/works" element={<WorksPage/>}/>
        <Route path="/freelance-website/contacts" element={<ContactsPage/>}/>

        <Route path='/freelance-website/blog/:postLink' element={<PostPage/>}/>

        <Route path="/freelance-website/index.html" element={<Navigate to="/freelance-website/main" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
