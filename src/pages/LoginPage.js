import '../style/LoginPage.css';

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="row">
        <div className="col-lg-8 loginFrame">
            <h1>로그인 하기</h1>
            <form name="fo">
              <h2 className="identification">ID</h2>
              <input type="text"></input><br></br>
              <h2 className="identification">PW</h2>
              <input type="password"></input><br></br>
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
       
        <div className="col-lg-4">
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
    </div>

  );
}



export default LoginPage;