import { Button } from "react-bootstrap";
import "./ChatPage.scss";
// import SendChat from "./SendChat";
import { useState } from "react";

const axios = require('axios').default;
const user_id = 'test...1';
const friend_id = 'test...2';
let result = [];

var flag = false;
var flagPost = false;

function ChatPage() {
  let [State, setState] = useState(0);

  const getData = async () => {
    try {
      return await axios.get('http://localhost:8080/chat/list/' + user_id + '/' + friend_id);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  //함수를 나오고 싶을 땐 return을 하셔도 되구 flag하나 두고 forEach에서 나인지 아닌 지 구별해서 맨 마지막에 push한번만하면 해결됩니다

  const getChatting = async () => {
    const response = await getData();
    if (flag === false) {
      response.data.forEach(element => {
        if (element.user_id === user_id) {
          result.push({
            key: 'ME',
            chat: element.chat_content,
          })
        }
        else {
          result.push({
            key: friend_id,
            chat: element.chat_content,
          })
        }
      }
      );
      flag = true;
      return;
    }
    
    if (flagPost === true) {
      result.push({
        key: 'ME',
        chat: response?.data[result.length].chat_content,
      })
      flagPost = false;
    }

    console.log(result);
    setState(1);
  }

  async function postData() {
    try {
      let post = document.getElementById('send').value;
      flagPost = true;
      //응답 성공 
      if (post !== "") {
        const response = await axios.post('http://localhost:8080/chat/insert', {
          //보내고자 하는 데이터 
          user_id: user_id,
          friend_id: friend_id,
          chat_content: post
        });
        console.log(response);
        document.getElementById('send').value = '';
        setState(0);
      }

    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  if (State === 0)
    getChatting();
  
  
  return (
    <div className="ChatPage"> 
      <div className="contactList">
        <div className="contacts">
          {/* {getContacts()} */}
        </div>
      </div>
      <div className="chatList">
        <div className="chats">
          {getChats()}
        </div>
        <div className="chatWindow">
          <input type="text" id="send" placeholder="입력하세요"></input>
          <Button onClick={postData}>보내기</Button>
        </div>
      </div>
    </div>
  );

}



// // 연락처 불러오기
// function getContacts() {
//   return chats.map(each => 
//     <div className="contact">
//       <div><img src="img/advertisement2.jpg" alt="프로필사진"></img></div>
//       <div className="info">
//         <div className="userName">{each.name}</div>
//         <div className="small">
//           <span>최근 대화 내용이 들어가야함</span>
//           <span>·</span>
//           <time datetime="P2D">2일전</time>
//         </div>
//       </div>
//       <div className="checkRead">
        
//       </div>
//   </div>);
// }

function getChats() {
  return result.map(item =>
    item.key === 'ME' ?
      <div className="chatByMe"><label>ME</label><div>{item.chat}</div></div>
      : <div className="ProfileImg"><img src="img/advertisement2.jpg" alt="프로필사진" ></img><div className="chatByFriend"><label>{item.key}</label><div >{item.chat}</div></div></div>);
  
}

// function defaultPage() {
//   return ();
// }

export default ChatPage;