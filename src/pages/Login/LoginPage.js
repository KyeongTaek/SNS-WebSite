import '../Login/LoginPage.scss';

function LoginPage() {
  return (
    <div className="LoginPage">
        <div className="Container">
            <div className="loginFrame">
              <div className="side">

              </div>
              <form name="fo">
                <h1>로그인 하기</h1>
                <h2 className="identification">ID</h2>
                <input type="text" placeholder="Enter id. . ." required></input><br></br>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
                <h2 className="identification">PW</h2>
                <input type="password" placeholder="Enter password. . ." required></input><br></br>
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