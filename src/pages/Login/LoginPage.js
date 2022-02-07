import '../Login/LoginPage.css';

function LoginPage() {
  return (
    <div className="LoginPage">
        <div className="loginFrame">
            <h1>로그인 하기</h1>
            
            <form name="fo" className="needs-validation" novalidate>
              <h2 className="identification">ID</h2>
              <input type="text" placeholder="Enter id. . ." required></input><br></br>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
              <h2 className="identification">PW</h2>
              <input type="password" placeholder="Enter password. . ." required></input><br></br>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
              <input type="submit" value="Log in"></input>
              <ul>
                <li><a className="loginpage" href="../idSearch">아이디 찾기</a></li>
                <li>|</li>
                <li><a className="loginpage" href="../pwSearch">비밀번호 찾기</a></li>
                <li>|</li>
                <li><a className="loginpage" href="../join">회원가입</a></li>
              </ul>
            </form>
        </div>
       
        <div className="board">
          <br></br>
          <br></br>
          <div className="fixed">
            <h1 className="views">조회수가 높은 게시판-1</h1>
          </div>
          <br></br>
          <br></br>
          <button className="button">조회수가 높은 게시판-1</button>
          
          <div className="fixed">
            <br></br>
            <br></br>
            <h1 className="views">조회수가 높은 게시판-2</h1>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="button">조회수가 높은 게시판-2</button>
        </div>
      
    </div>

  );
}



export default LoginPage;