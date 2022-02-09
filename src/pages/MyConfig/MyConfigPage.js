import "./MyConfigPage.scss";
import ChangeProfile from "./ChangeProfile"
import ChangePw from "./ChangePw"
import { useState } from "react";


function MyConfigPage() { 
  let [Tab, setTab] = useState(0);

  function TabContent(props) {
    if (props.Tab === 0) {
      return <ChangeProfile />;
    }
    else if (props.Tab === 1) return <ChangePw />;
  }
  
    return (
      <div className="MyConfigPage">
        <div className="Container">
          <ul className="nav">
            <li id="nav1" onClick={() => {
              document.getElementById('nav1').style.cssText = 'border-left: 2px solid rgba(38,38,38);';
              document.getElementById('nav2').style.cssText = 'border-left: none';
              setTab(0);
            }}>프로필 편집</li>
            <li id="nav2" onClick={() => {
              document.getElementById('nav1').style.cssText = 'border-left: none';
              document.getElementById('nav2').style.cssText = 'border-left: 2px solid rgba(38,38,38);';
              setTab(1);
            }}>비밀번호 변경</li>
          </ul>
          <div className="MyInfo">
            <TabContent Tab={Tab} />
          </div>
        </div>
      </div>
    );
  }


export default MyConfigPage;