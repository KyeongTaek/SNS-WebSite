
function ChangePW() {

  return (

    <div >
      <div className="MyProfile">
        <div className="image">
          <img src="img/advertisement2.jpg" alt="프로필사진"></img>
        </div>
        <div className="text">
          <span id="id2">heejin509</span>
        </div>
      </div>

      <form method="POST" >
        <div className="changeInfo">
          <div className="pw">
            <aside>
              <label>이전 비밀번호</label>
            </aside>
            <input type="password" />
          </div>

          <div className="newPw">
            <aside>
              <label>새 비밀번호</label>
            </aside>
            <input type="password" />
          </div>

          <div className="newPwConfig">
            <aside>
              <label>새 비밀번호 확인</label>
            </aside>
            <input type="password" />
          </div>
          <div className="submit">
            <aside>

            </aside>
            <input type="submit" placeholder="비밀번호 변경" />

          </div>
        </div>
      </form>
    </div>

  )
}

export default ChangePW;
