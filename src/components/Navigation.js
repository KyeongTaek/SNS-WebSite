import { NavLink } from 'react-router-dom'
import '../style/Navigation.css';

function Navigation() {
             
        //  {/* Frame 페이지를 이름에 따라 보여줄지 안보여줄지 설정 */}
        //   {/* { location.pathname !== "/login" && location.pathname !=="/join" ?
        //   <div> <Footer /> <Navigation /> </div>: <div></div> } */}

    return (
      <div className="Navigation">
        
          <nav>
          
            <div className="row">
                <div className="col-lg-1 logo">
                    <NavLink to="/">logo</NavLink>
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

                        <NavLink to="/notification"> 
                            <i className="far fa-bell fa-2x"></i>
                        </NavLink>
                        <NavLink to="/chat">
                            <i className="far fa-comment-dots fa-2x"></i>
                        </NavLink>
                      

                        <NavLink to="/boardWrite">
                            <i className="fas fa-file-medical fa-2x"></i>
                        </NavLink>
                        <NavLink to="/boardWrite">
                         <i className="fas fa-film fa-2x"></i>
                        </NavLink>
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
        </nav>
      </div>
    );
  }
  
  
  export default Navigation;