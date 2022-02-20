import '../Login/LoginPage.scss';
import {useState} from 'react'
import {login} from '../../Services/UserService'

function LoginPage() {
  const [user_id, setUser_id] = useState("");
  const [user_pw, setUser_pw] = useState("");

  const doLogin = (event)=>{
    event.preventDefault();
    login({user_id:user_id, user_pw:user_pw});
  }
  return (
    <div className="LoginPage">
        <div className="Container">
            <div className="loginFrame">
              <div className="side">

              </div>
              <form onSubmit={doLogin} name="fo">
                <h1>로그인 하기</h1>
                <div className="label">ID</div>
                <input type="text" placeholder="Enter id. . ." onChange={(e)=>{setUser_id(e.target.value)}} required></input><br></br>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
                
                <div className="label">PW</div>
                <input type="password" placeholder="Enter password. . ." onChange={(e)=>{setUser_pw(e.target.value)}} required></input><br></br>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
                <input type="submit" value="Log in"></input>
                <ul>
                  <li><a className="loginpage" href="../idSearch">아이디 찾기</a></li>
                  <li>|</li>
                  <li><a className="loginpage" href="../pwSearch">비밀번호 찾기</a></li>
                  <li>|</li>
                  <li><a className="loginpage" href="../join">회원가입</a></li>
                </ul>
              </form>
              <div className="side">
              
              </div>
            </div>
       
            <div className="board">
              <div className="buttons">

                <br></br>
                <h1 className="views">조회수가 높은 게시판-1</h1>
                
                <button className="button">조회수가 높은 게시판-1</button>
        
                
                <h1 className="views">조회수가 높은 게시판-2</h1>
                
                <button className="button">조회수가 높은 게시판-2</button>
              </div>
              <div className="side">

              </div>
            </div>
        </div>
    </div>

  );
}



export default LoginPage;