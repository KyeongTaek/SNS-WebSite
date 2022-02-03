import '../style/Management.css';
import { useState } from 'react'

function ManagementPage() {
  const [prev, setPrev] = useState();

  const [btn1, setBtn1] = useState({background:"#d4d0f5",
                                    borderLeft:"10px solid #a9a0fc"});
  
    function buttonLink(e){
      if(prev === undefined && e.target.innerText ===" 신고관리"){
        console.log("ok")
      }else if (prev === undefined){
        setBtn1({});
        setPrev(e);
        e.target.style.background = "#d4d0f5";
        e.target.style.borderLeft = "10px solid #a9a0fc";

      }
      else{
        prev.target.style.background = "white";
        prev.target.style.borderLeft = "none";
        e.target.style.background = "#d4d0f5";
        e.target.style.borderLeft = "10px solid #a9a0fc";
        setPrev(e);
      }

      
    }
    return (
      <div className="ManagementPage">

          <div className="sideBarFrame">
            <div className="download">
              <p>
                관리자 메뉴얼 다운로드
              </p>
            </div>

              <div className='sideBar'>
                <button style={btn1} onClick={buttonLink} ><i className="fas fa-home fa-2x"></i> 신고관리</button>
                <button onClick={buttonLink}><i className="fas fa-chart-bar fa-2x"></i> &nbsp;광고 대시보드</button>
                <button onClick={buttonLink}><i className="far fa-envelope fa-2x"></i> &nbsp;유저 관리</button>
                <button onClick={buttonLink}>&nbsp;<i className="fas fa-file-contract fa-2x"></i>&nbsp;&nbsp;게시글 관리</button>

              </div>
            </div>

            <div className="manageBody">
              <h2>신고 멤버</h2>
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
                      신고당한 유저
                    </td>
                    <td>
                      최근 신고 날짜
                    </td>
                    <td>
                      신고 내용
                    </td>
                    <td>
                      신고 횟수
                    </td>
                    <td>
                      제재
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
            </div>
          </div>
    );
  }
  
  export default ManagementPage;
  