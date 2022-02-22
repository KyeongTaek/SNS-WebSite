import { useEffect, useState} from 'react';
import { call } from '../../Services/EtcService';
function BoardManagement(){
  const [user_id, setUser_id] = useState("예시아이디");
  const [report_content, setReport_content] = useState("예시내용");
  const [post_id, setPost_id] = useState(0);
  const [regulated, setRegulated] = useState();
  const [datas, setDatas] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      call("/report/list", "GET", null).then((response) =>
      {setDatas(response)
        setLoading(false);
      })
      
      // await call("/report/reportList", "POST", null).then((response) =>
      // {setReport_content(response.report_content)})

      // await call("report/reportList", "POST", null).then((response) =>
      // {setPost_id(response.post_id)})

      // await call("report/reportList", "POST", null).then((response) =>
      // {setRegulated(response.regulated)})
    }
    fetchData();
  }, []);
  
  
  
  
  
  
  
  return(
    
        <div className="manageBody">

              <h2>게시글 관리</h2>
                <select id="large" name="large">
                  <option value="volvo">하루</option>
                  <option value="saab">일주일</option>
                  <option value="fiat">한달</option>
                  <option value="audi">일년</option>
                </select>
                <select id="small" name="small">
                  <option value="volvo">하루</option>
                  <option value="saab">일주일</option>
                  <option value="fiat">한달</option>
                  <option value="audi">일년</option>
                </select>
              <table>
                <thead>
                  <tr>
                    <td>
                      사용자 아이디
                    </td>
                    <td>
                      최근 신고 날짜
                    </td>
                    <td>
                      게시글 신고 내용
                    </td>
                    <td>
                      게시글 번호
                    </td>
                    <td>
                      제재
                    </td>
                  </tr>
                </thead>
                <tbody>
                {/* {  datas.map((data) => 
                    <div>{console.log(data)}</div>
                )} */}
                {loading===false
                ?datas.map((data) =>
                <tr>
                    
                <td>
                  {data.user_id}
                </td>
                <td>{data.regDate}</td>
                <td>{data.report_content}</td>
                <td>{data.post_id}</td>
                <td>
                  <select id="small" name="small">
                    <option value="volvo">하루</option>
                    <option value="saab">일주일</option>
                    <option value="fiat">한달</option>
                    <option value="audi">일년</option>
                  </select>
                </td>
                
              </tr>
)
                :null}
                  <tr>
                    
                    <td>
                      {user_id}
                    </td>
                    <td>{regulated}</td>
                    <td>{report_content}</td>
                    <td>{post_id}</td>
                    <td>
                      <select id="small" name="small">
                        <option value="volvo">하루</option>
                        <option value="saab">일주일</option>
                        <option value="fiat">한달</option>
                        <option value="audi">일년</option>
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
                        <option value="volvo">하루</option>
                        <option value="saab">일주일</option>
                        <option value="fiat">한달</option>
                        <option value="audi">일년</option>
                      </select>
                    </td>
                    
                  </tr>
                </tbody>
                
              </table>
                <div className="inputContainer">
                    <select id="type">
                        <option value="uId">아이디</option>
                        <option value="boardContent">게시판 내용</option>
                        <option value="id_board">아이디 + 게시판 내용</option>
                    </select>
                    <input type="text" placeholder="입력"></input>
                    <button>검색</button>

                </div>
            
            </div>
    )
}

export default BoardManagement;