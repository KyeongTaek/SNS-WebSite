import '../IdSearch/IdSearchPage.scss'
function IdSearchPage() {
    return (
      <div className="IdSearchPage">
          <div class="bigContainer">
              <div class="smallContainer1">
                
              </div>

              <form name="IdSearch">
                <div class="items">
                  <h1>아이디 찾기</h1>
                  <br></br>
                  <br></br>
                </div>
                <div class="items">
                  <h2 className="identification">Full Name</h2><br></br>
                  <input type="text" placeholder="이름 또는 닉네임을 입력해주세요" required></input><br></br>
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
  
  
  export default IdSearchPage;