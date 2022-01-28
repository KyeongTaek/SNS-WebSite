import BoardModifyPage from './pages/BoardModifyPage'
import BoardWritePage from './pages/BoardWritePage'
import ChatPage from './pages/ChatPage'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import JoinPage from './pages/JoinPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import ManagementPage from './pages/ManagementPage'
import MyPage from './pages/MyPage'
import MyConfigPage from './pages/MyConfigPage'
import NotificationPage from './pages/NotificationPage'
import PwModifyPage from './pages/PwModifyPage'
import IdSearchPage from './pages/IdSearchPage'
import PwSearchPage from './pages/PwSearchPage'
import ReportPage from './pages/ReportPage'
import './style/common.css';

import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function RouterSet() {
    const [location, setLocation] = useState("");
    console.log("11"+location);
    // const getLocation = (location) =>{
    //     setLocation(location);
    // }
  return (
      
    <div className="RouterSet">

    <Router>
        <Navigation location = {location} setLocation = {setLocation}/>
        <Footer />
        
        <Routes>
            
          <Route path="/boardModify" element={<BoardModifyPage />}/>
          <Route path="/boardWrite" element={<BoardWritePage />}/>
          <Route path="/chat" element={<ChatPage />}/>
          <Route path="/join" element={<JoinPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/management" element={<ManagementPage />}/>
          <Route path="/my" element={<MyPage />}/>
          <Route path="/myConfig" element={<MyConfigPage/>}/>
          <Route path="/notification" element={<NotificationPage />}/>
          <Route path="/pwModify" element={<PwModifyPage />}/>
          <Route path="/idSearch" element={<IdSearchPage />}/>
          <Route path="/pwSearch" element={<PwSearchPage />}/>
          <Route path="/Report" element={<ReportPage />}/>
          <Route path="/" element={<MainPage />}/>
        
        </Routes>
      </Router>
    </div>
  );
}


export default RouterSet;