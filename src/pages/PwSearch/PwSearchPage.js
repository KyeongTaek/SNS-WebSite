import '../PwSearch/PwSearchPage.scss'
function PwSearchPage() {
    return (
      <div className="PwSearchPage">
        <div className="bigContainer">
          <div className="smallContainer1">

          </div>

          <form name="PwSearch">
            <div className="items">
              <h1>비밀번호 찾기</h1>
              <br></br>
              <br></br>
            </div>
            <div className="items">
              <div className="label">ID</div>
              <input type="text" placeholder="아이디를 입력해주세요" required></input><br></br>
            </div>
            <div className="items">
              <div className="label">Email</div>
              <input type="text" placeholder="이메일을 입력해주세요" required></input><br></br>
            </div>
            <div className="items">
              <input type="submit" value="다음 단계"></input>
            </div>
          </form>
          <div className="smallContainer1">
            
          </div>
        </div>
      </div>
    );
  }
  
  export default PwSearchPage;
  