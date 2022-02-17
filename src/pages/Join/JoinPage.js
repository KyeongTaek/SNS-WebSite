import '../Join/JoinPage.scss';

function JoinPage() {
    return (
      <div className="JoinPage">
        <div className="joinFrame">
          <div className="side">

          </div>

          <form name="fo">
            <h1>회원가입</h1>  
            <div className="label">Full Name</div>
            <input type="text" placeholder="Enter Name. . ." required></input><br></br>
             
            <div className="label">ID</div>
            <input type="text" placeholder="Enter ID. . ." required></input><br></br>
            
            <div className="label">Birth</div>
            <input type="text" placeholder="ex) 1999.01.31" required></input><br></br>

            <div className="label">Address</div>
            <input type="text" placeholder="ex) 충청북도 청주시 서원구 충대로 1" required></input><br></br>
            <div className="label">Password</div>
            <input type="password" placeholder="Enter password. . ." required></input><br></br>
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
              
            <div className="label">Confirm Password</div>
            <input type="password" placeholder="Enter password. . ." required></input><br></br>
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>

            <div className="policy">By creating an account you agree to our Terms of Service and Privacy Policy</div>
              
            <input type="submit" value="CONTINUE"></input>
            <ul>
              <li><a className="joinpage" href="../idSearch">아이디 찾기</a></li>
              <li>|</li>
              <li><a className="joinpage" href="../pwSearch">비밀번호 찾기</a></li>
            </ul>
          </form>
          
          <div className="side">

          </div>
        </div>
      </div>
    );
  }
  
  
  export default JoinPage;