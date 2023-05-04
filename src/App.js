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
  
        <Route path="/" element={<MainPage/>}/>
        <Route path="/blog" element={<OurBlogPage/>}/>
        <Route path="/works" element={<WorksPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>

        <Route path='/blog/:postLink' element={<PostPage/>}/>

        <Route path="/index.html" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
