import '../PwSearch/PwSearchPage.css'
function PwSearchPage() {
    return (
      <div className="PwSearchPage">
        <div class="bigContainer">
          <div class="smallContainer1">

          </div>

          <form name="PwSearch">
            <div class="items">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1>비밀번호 찾기</h1>
              <br></br>
              <br></br>
            </div>
            <div class="items">
              <h2 className="identification">ID</h2><br></br>
              <input type="text" placeholder="아이디를 입력해주세요" required></input><br></br>
            </div>
            <div class="items">
              <h2 className="identification">Email</h2><br></br>
              <input type="email" placeholder="이메일을 입력해주세요" required></input><br></br>
            </div>
            <div class="items">
              <input type="submit" value="다음 단계"></input>
            </div>
          </form>
          <div class="smallContainer1">
            
          </div>
        </div>
      </div>
    );
  }
  
  export default PwSearchPage;
  