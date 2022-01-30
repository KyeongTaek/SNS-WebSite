import { NavLink } from 'react-router-dom'
import '../style/navigation.css';

function Navigation() {

    return (
      <div className="Navigation">
        
          <nav>
          
            <div className="row">
                <div className="col-lg-1 logo">
                    <p>logo</p>
                </div>
                <div className="col-lg-3">
                </div>

                <div className="col-lg-4 search">
                    <div className='searchFrame'>
                        <input type="text" id="searchContent" name = "searchContent" placeholder='search...'/>
                        <button className="img-button"><i className="fas fa-search fa-sm"></i></button>
                    </div>

                </div>

                <div className="col-lg-4 navRight">
                    <div className='icon'>
                        <i className="far fa-bell fa-2x"></i>
                        <i className="far fa-comment-dots fa-2x"></i>
                        <i className="fas fa-file-medical fa-2x"></i>
                        <i className="fas fa-film fa-2x"></i>
                    </div>
                
                    <div className='user'>
                        <div className='circleBox'>
                            <i className="fas fa-user-alt"></i>
                            
                        </div>
                        <div className='userStatus'>
                            <p>Need login</p>
                            <i className="fas fa-angle-down fa-lg"></i>
                        </div>
                    </div>
                    <div className='user2Frame' id='user2Frame'>
                        <i className="fas fa-user-alt"></i>

                    </div>
                </div>
            </div>
 

              <br/>
            {/* <ul>
             
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
              <li>
                  <NavLink to="/report">ReportPage</NavLink>
              </li>
            </ul> */}
        </nav>
      </div>
    );
  }
  
  
  export default Navigation;