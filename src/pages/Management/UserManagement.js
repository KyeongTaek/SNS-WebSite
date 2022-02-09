
function UserManagement(){
    return(
        <div className="manageBody">
              <h2>사용자 관리</h2>
                <select id="large" name="large">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
                <select id="small" name="small">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              <table>
                <thead>
                  <tr>
                    <td>
                      사용자 아이디
                    </td>
                    <td>
                      권한 변경 날짜
                    </td>
                    <td>
                      제재 상황
                    </td>
                    <td>
                      신고 횟수
                    </td>
                    <td>
                      권한 변경
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      10
                    </td>
                    <td>10</td>
                    <td>                      과제를 열심히 수행하지 않았기에 신고합니다.
</td>
                    <td>10</td>
                    <td>
                      <select id="small" name="small">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                      </select>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                    <td>
                      <select id="small" name="small">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                      </select>
                    </td>
                    
                  </tr>
                </tbody>
                
              </table>
              <div className="inputContainer">
                    <select id="type">
                        <option value="uId">아이디</option>
                        <option value="boardContent">제재 상황</option>
                    </select>
                    <input type="text" placeholder="입력"></input>
                    <button>검색</button>

                </div>
            </div>
    )
}

export default UserManagement;