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
import './common.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function RouterSet() {

  return (
      
    <div className="RouterSet">

    
    {window.location.pathname}
    
      <Router>
        <Footer />
        <Navigation />
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
          <Route path="/" element={<MainPage />}/>
        
        </Routes>
      </Router>
    </div>
  );
}


export default RouterSet;