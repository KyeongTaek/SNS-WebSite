import { NavLink } from 'react-router-dom'

function Navigation() {

    return (
      <div className="Navigation">
        
          <nav>
            <ul>
             
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
            </ul>
        </nav>
      </div>
    );
  }
  
  
  export default Navigation;