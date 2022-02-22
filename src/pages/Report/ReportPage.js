import { Form } from "react-bootstrap"
import {useState} from 'react'
import {submitReport} from '../../Services/EtcService'
//import {utcDay} from 'd3-time'

import "./ReportPage.scss";


function ReportPage() {
  const [report_title, setReport_title] = useState("");
  const [report_content, setReport_content] = useState("");
  const [report_reason, setReport_reason] = useState(0);
  const [regulated, setRegulated] = useState("");

  const doReport = (event) => {
    event.preventDefault();
    submitReport({report_reason:report_reason, report_title:report_title, report_content:report_content});
  }

  // const getRadio = (event) => {
  //   event.preventDefault();
  //   this.setReport_reason=event.target.value;
  // }



    return (
      <div className="ReportPage">
        <div className="container">
          <div className="title">신고</div>
          <div className="content">
              <Form onSubmit={doReport}>
                <span>분류</span>
                <label for="chk1">
                  <input type="radio" name="category" value="1" id="chk1" onclick={(event)=>{setReport_reason(event.target.value)}} />욕설/비하
                </label>
                <label for="chk2">
                  <input type="radio" name="category" value="2" id="chk2" onclick={(event)=>{setReport_reason(event.target.value)}}/>음란물
                </label>
                <label for="chk3">
                  <input type="radio" name="category" value="3" id="chk3" onclick={(event)=>{setReport_reason(event.target.value)}}/>잘못된 정보
                </label>
                <label for="chk4">
                  <input type="radio" name="category" value="4" id="chk4" onclick={(event)=>{setReport_reason(event.target.value)}}/>자살/자해
                </label>
                <label for="chk5">
                  <input type="radio" name="category" value="5" id="chk5" onclick={(event)=>{setReport_reason(event.target.value)}}/>기타
                </label>
                <input type="text" class="form-control" placeholder="제목을 입력하세요" onChange={(event)=>{setReport_title(event.target.value)}}/>
                <textarea type="text" class="form-control" placeholder="상세한 신고 내용을 입력하세요" rows="10" onChange={(event)=>{setReport_content(event.target.value)}}/>
                <input type="submit"/>
              </Form>
            </div>
          </div>
      </div>
    );
  }
  
  export default ReportPage;
  