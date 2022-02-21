import { NavLink, useLocation } from 'react-router-dom'
import '../style/Navigation.scss';
import { Dropdown } from 'react-bootstrap';
import { useEffect, useState} from 'react';
import { call, signout } from '../Services/UserService';
function Navigation() {
        const location = useLocation();
        //  {/* Frame 페이지를 이름에 따라 보여줄지 안보여줄지 설정 */}
        //   {/* { location.pathname !== "/login" && location.pathname !=="/join" ?
        //   <div> <Footer /> <Navigation /> </div>: <div></div> } */}
        console.log(location.pathname);
        const [name, setName] = useState("")
        const [chatCount, setChatCount] = useState(0)
        useEffect(() => {
            if(location.pathname ==="/" || location.pathname === "/join" || location.pathname ==="/pwSearch" || location.pathname === "/idSearch"){

            }
            else{
                async function fetchData(){
                    let count = 0;
                    call("/user/info", "GET", null).then((response) =>
                    {setName(response.user_name)})
    
                    await call("/chat/with", "GET", null).then((response) =>
                    response.forEach(element =>{
                        
                        count += element.chat_read;
                    }))
                    setChatCount(count)
                }
                fetchData();
                
            }
            
          },[location.pathname]);

    return (
      <div className="Navigation">
        {location.pathname ==="/" || location.pathname === "/join" || location.pathname ==="/pwSearch" || location.pathname === "/idSearch"? 
        <div>
        </div>:
        <div>
            <nav >
            <div className='container'>
                <div className="logo">
                    <NavLink to="/mainPage">logo</NavLink>
                </div>
    
                <div className="search">
                    <div className='searchFrame'>
                        <input type="text" id="searchContent" name = "searchContent" placeholder='search...'/>
                        <button className="img-button"><i className="fas fa-search fa-sm"></i></button>
                    </div>

                </div>

                <div className="navRight">
                    <div className='icon'>

                        <NavLink className="iconFrame" to="/notification"> 
                            <i className="far fa-bell fa-2x"></i>
                            <div>
                                1
                            </div>
                        </NavLink>
                        <NavLink className="iconFrame" to="/chat">
                            <i className="far fa-comment-dots fa-2x"></i>
                            <div>
                                {chatCount}
                            </div>
                        </NavLink>
                        <NavLink className="iconFrame" to="/boardWrite">
                            <i className="fas fa-file-medical fa-2x"></i>
                        </NavLink>
                    </div>
                
                    <div className='user'>
                        <div className='circleBox'>
                            <i className="fas fa-user-alt"></i>
                            
                        </div>
                        <div className='userStatus'>
                            <p> {name}</p>
                        </div>
                        
                        <div className='userDropFrame'>
                        {/* <i className="fas fa-angle-down fa-lg"></i> */}

                        <Dropdown className="userDropBtn" autoClose={true}>
                                    <Dropdown.Toggle id="dropdown-autoclose-false">
                                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/my">내 프로필 보기</Dropdown.Item>
                            <Dropdown.Item href="/myconfig">설정 및 개인정보</Dropdown.Item>
                            <Dropdown.Item onClick={signout}>로그아웃</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </div>
                   
                </div>
              <br/>
              </div>
        </nav>
        </div>}
          
      </div>
    );
  }
  
  
  export default Navigation;