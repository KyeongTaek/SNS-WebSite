function ChangeProfile() {


  return (
    <div >
      <div className="MyProfile">
        <div className="image">
          <img src="img/advertisement2.jpg" alt="프로필사진"></img>
        </div>
        <div className="text">
          <span id="id">heejin509</span>
          <form method="POST" enctype="multipart/form-data">
            <div class="button">
              <label for="chooseFile">
                프로필 사진 변경
              </label>
            </div>
            <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="loadFile(this)" />
          </form>
        </div>
      </div>

      <form method="POST" >
        <div className="changeInfo">
          <div className="id">
            <aside>
              <label>사용자 이름</label>
            </aside>
            <input type="text" placeholder="사용자 이름" />
          </div>

          <div className="present">
            <aside>
              <label>상태</label>
            </aside>
            <textarea placeholder="상태" rows="3"></textarea>
          </div>

          <div className="email">
            <aside>
              <label>이메일</label>
            </aside>
            <input type="text" placeholder="이메일" />
          </div>
          <div className="submit">
            <aside>

            </aside>
            <input type="submit" />

          </div>
        </div>
      </form>
    </div>
  );
}

export default ChangeProfile;
