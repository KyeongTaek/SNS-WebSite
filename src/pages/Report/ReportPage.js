import { Form } from "react-bootstrap"

import "./ReportPage.scss";


function ReportPage() {
    return (
      <div className="ReportPage">
        <div className="container">
          <div className="title">신고</div>
          <div className="content">
              <Form>
                <span>분류</span>
                <label for="chk1">
                  <input type="radio" name="category" value="1" id="chk1" />욕설/비하
                </label>
                <label for="chk2">
                  <input type="radio" name="category" value="2" id="chk2" />음란물
                </label>
                <label for="chk3">
                  <input type="radio" name="category" value="3" id="chk3" />잘못된 정보
                </label>
                <label for="chk4">
                  <input type="radio" name="category" value="4" id="chk4" />자살/자해
                </label>
                <label for="chk5">
                  <input type="radio" name="category" value="5" id="chk5" />기타
                </label>
                <input type="text" class="form-control" placeholder="제목을 입력하세요" />
                <textarea type="text" class="form-control" placeholder="상세한 신고 내용을 입력하세요" rows="10"/>
                <input type="submit"/>
              </Form>
            </div>
          </div>
      </div>
    );
  }
  
  export default ReportPage;
  