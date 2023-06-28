import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './styles/css/style.css';
import NavBar from "./components/Ui/NavBar";
import OurBlogPage from "./components/pages/OurBlogPage";
import MainPage from "./components/pages/MainPage";
import WorksPage from "./components/pages/WorksPage";
import ContactsPage from './components/pages/ContactsPage'
import PostPage from "./components/pages/PostPage";
import WorkPage from "./components/pages/WorkPage";

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
  
        {/* Для GitHub */}
        
        <Route path="/freelance-website/" element={<MainPage/>}/>
        <Route path="/freelance-website/blog" element={<OurBlogPage/>}/>
        <Route path="/freelance-website/works" element={<WorksPage/>}/>
        <Route path="/freelance-website/contacts" element={<ContactsPage/>}/>

        <Route path='/freelance-website/blog/:postLink' element={<PostPage/>}/>
        <Route path='/freelance-website/works/:postLink' element={<WorkPage/>}/>

        <Route path="/freelance-website/index.html" element={<Navigate to="/freelance-website/" />} />

        {/* для разработки */}

        {/* <Route path="/" element={<MainPage/>}/>
        <Route path="/blog" element={<OurBlogPage/>}/>
        <Route path="/works" element={<WorksPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>

        <Route path='/blog/:postLink' element={<PostPage/>}/>
        <Route path='/works/:postLink' element={<WorkPage/>}/>

        <Route path="/index.html" element={<Navigate to="/" />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
