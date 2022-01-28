import BoardModifyPage from './pages/BoardModifyPage'
import BoardWritePage from './pages/BoardWritePage'
import ChatPage from './pages/ChatPage'
import FramePage from './pages/FramePage'
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
import './Common.css';

import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'

function RouterSet() {
  return (
    <div className="RouterSet">

      <FramePage />
    
      <Router>
      <nav>
        <ul>
            <li>
                <NavLink to="/">FramePage</NavLink>
            </li>
            <li>
                <NavLink to="/boardModify">BoardModifyPage</NavLink>
            </li>
            <li>
                <NavLink to="/boardWrite">BoardWritePage</NavLink>
            </li>
            <li>
                <NavLink to="/chat">ChatPage</NavLink>
            </li>
            <li>
                <NavLink to="/join">JoinPage</NavLink>
            </li>
            <li>
                <NavLink to="/login">LoginPage</NavLink>
            </li>
            <li>
                <NavLink to="/management">ManagementPage</NavLink>
            </li>
            <li>
                <NavLink to="/my">MyPage</NavLink>
            </li>
            <li>
                <NavLink to="/myConfig">MyConfigPage</NavLink>
            </li>
            <li>
                <NavLink to="/notification">NotificationPage</NavLink>
            </li>
            <li>
                <NavLink to="/pwModify">PwModifyPage</NavLink>
            </li>
            <li>
                <NavLink to="/idSearch">IdSearchPage</NavLink>
            </li>
            <li>
                <NavLink to="/pwSearch">PwSearchPage</NavLink>
            </li>
          </ul>
        </nav>
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
          <Route path="/main" element={<MainPage />}/>
          <Route exact path="/" element={<FramePage />}/>
        
        </Routes>
      </Router>
    </div>
  );
}


export default RouterSet;