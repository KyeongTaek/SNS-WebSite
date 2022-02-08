import '../Join/JoinPage.scss';

function JoinPage() {
    return (
      <div className="JoinPage" id='wrapper'>
        <div className="row">
          <div className="col-lg-4">

          </div>

          <div className="col-lg-4 joinFrame">
            <h1>회원가입</h1>
            <form name="fo" className="needs-validation" noValidate>
              
              <h2 className="identification">Full Name</h2>
              <input type="text" placeholder="Enter Name. . ." required></input><br></br>
              
              <h2 className="identification">Email</h2>
              <input type="text" placeholder="Enter Email. . ." required></input><br></br>
              
              <h2 className="identification">Password</h2>
              <input type="password" placeholder="Enter password. . ." required></input><br></br>
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
              
              <h2 className="identification">Confirm Password</h2>
              <input type="password" placeholder="Enter password. . ." required></input><br></br>
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
              
              <input type="submit" value="Log in"></input>
              <ul>
                <li><a className="joinpage" href="../idSearch">아이디 찾기</a></li>
                <li>|</li>
                <li><a className="joinpage" href="../pwSearch">비밀번호 찾기</a></li>
              </ul>
            </form>
          </div>

          <div className="col-lg-4">

          </div>
        </div>
          
  
      </div>
    );
  }
  
  
  export default JoinPage;