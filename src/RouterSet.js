import BoardModifyPage from './pages/Board/BoardModifyPage'
import BoardWritePage from './pages/Board/BoardWritePage'
import ChatPage from './pages/Chat/ChatPage'
import JoinPage from './pages/Join/JoinPage'
import LoginPage from './pages/Login/LoginPage'
import MainPage from './pages/Main/MainPage'
import ManagementPage from './pages/Management/ManagementPage'
import MyPage from './pages/My/MyPage'
import MyConfigPage from './pages/MyConfig/MyConfigPage'
import NotificationPage from './pages/Notification/NotificationPage'
import PwModifyPage from './pages/PwModify/PwModifyPage'
import PwAuthorityPage from './pages/PwAuthority/PwAuthorityPage'
import IdSearchPage from './pages/IdSearch/IdSearchPage'
import PwSearchPage from './pages/PwSearch/PwSearchPage'
import ReportPage from './pages/Report/ReportPage'
import './style/common.scss';
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import { useEffect } from 'react'
import {useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { useMediaQuery } from 'react-responsive'


import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

function RouterSet() {
  
  const dispatch = useDispatch()
  const isDesktop = useMediaQuery({query: '(min-width: 1100px)' })

  useEffect(()=>{
    dispatch({ type : 'resize', isDesktop:isDesktop})
  }, [dispatch, isDesktop])


  return (
    <div className="RouterSet">

    <div className="wrapper">
    <Router>
        <Navigation />
        
        <Routes>
            
          <Route path="/boardModify" element={<BoardModifyPage />}/>
          <Route path="/boardWrite" element={<BoardWritePage />}/>
          <Route path="/chat" element={<ChatPage />}/>
          <Route path="/join" element={<JoinPage />}/>
          <Route path="/management" element={<ManagementPage />}/>
          <Route path="/my" element={<MyPage />}/>
          <Route path="/myConfig" element={<MyConfigPage/>}/>
          <Route path="/notification" element={<NotificationPage />}/>
          <Route path="/pwModify" element={<PwModifyPage />}/>
          <Route path="/pwAuthority" element={<PwAuthorityPage />}/>
          <Route path="/idSearch" element={<IdSearchPage />}/>
          <Route path="/pwSearch" element={<PwSearchPage />}/>
          <Route path="/Report" element={<ReportPage />}/>
          <Route path="/MainPage" element={<MainPage />}/>
          <Route path="/" element={<LoginPage />}/>
        
        </Routes>


      </Router>
      </div>

      <Footer />

    </div>
  );
}


export default RouterSet;