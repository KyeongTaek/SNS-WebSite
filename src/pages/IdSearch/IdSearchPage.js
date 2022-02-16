import '../IdSearch/IdSearchPage.scss'
function IdSearchPage() {
    return (
      <div className="IdSearchPage">
          <div className="bigContainer">
              <div className="smallContainer1">
                
              </div>

              <form name="IdSearch">
                <div className="items">
                  <h1>아이디 찾기</h1>
                  <br></br>
                  <br></br>
                </div>
                <div className="items">
                  <div className="label">Full Name</div><br></br>
                  <input type="text" placeholder="Enter Name. . ." required></input><br></br>
                </div>
                <div className="items">
                  <div className="label">Birth</div><br></br>
                  <input type="text" placeholder="ex) 1999.01.31" required></input><br></br>
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
  
  
  export default IdSearchPage;