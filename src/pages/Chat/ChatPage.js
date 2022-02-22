import { Button } from "react-bootstrap";
import "./ChatPage.scss";
// import SendChat from "./SendChat";
import { useCallback, useEffect, useState } from "react";
const ACCESS_TOKEN = "ACCESS_TOKEN";

const axios = require('axios').default;
const user_id = 'test...1';
// let chatList = [];

const accessToken = localStorage.getItem("ACCESS_TOKEN");

const getFriendData = async () => {
  return await axios.get('http://localhost:8089/chat/with', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
}




function ChatPage() {
  const [text, setText] = useState('');
  const [select, setSelect] = useState('');
  const [request, setRequest] = useState(0);
  const [result, setResult] = useState([]);
  const [change, setChange] = useState(false);
  const [contact, setContact] = useState([]);

  // input 타이핑
  const onChange = (e) => {
    setText(e.target.value);
  };

  // 값 전송 버튼
  const onReset = () => {
    if (text !== '') {
      postData();
      setText('');
      setChange(true);
    }
  }

  // 연락처 
  const onClick = (e) => {
    setRequest(2);
    setChange(true);
    setSelect(e.target.id);
    console.log(e.target.id);
  }


  // const clickMaster = useCallback(() => {

  // })

  useEffect(() => {
    console.log("jasdjfioasjdfio");
    if (request === 3)
      getChatting();
    if (request === 2) {
      getChatting();
    }
    if (request === 1)
      getChatting();
    setChange(false);
  }, [request, change]);

  useEffect(() => {
    parsingFriend();
}, []);


  // state : 0 -> default
  // state : 1 -> post 요청 보냄
  // state : 2 -> 친구 변경
  // state : 3 -> getChatting 필요


  const parsingFriend = async () => {
    if (accessToken && accessToken !== null) {
      try {
        const response = await getFriendData();
        setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  console.log(contact);

  const postData = async () => {
    console.log(select, text);
    try {
      const response = await axios.post('http://localhost:8089/chat/insert', {
        friend_id: select,
        chat_content: text
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      setRequest(1);
    }
    catch (error) {
      console.log(error);
    }
  }
  

  const getData = async () => {
      try {
        return await axios.get('http://localhost:8089/chat/list/' + user_id + '/' + select, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
      } catch (error) {
        //응답 실패
        console.error(error);
      }
  }


  // 친구 고르면 -> 새로 세팅해서 넣어줘야함
  // 아니면 -> 그냥 맨 마지막 하나만 넣어줘야함
  const getChatting = async () => {
    const response = await getData();
    if (request === 2 || request === 1) {
      setResult(response.data);
    }
    
    // if (request === 1) {
    //   result.push({
    //     key: 'ME',
    //     chat: response?.data[result.length].chat_content,
    //   })
    // }

  }
  console.log(result);

  // 연락처 불러오기
  function getContacts() {
    return contact.map(each =>
      <div className="contact" id={each.friend_id} onClick={onClick}>
        <div><img src="img/advertisement2.jpg" alt="프로필사진"></img></div>
        <div className="info">
          <div className="userName">{each.friend_id}</div>
          <div className="small">
            <span>{each.chat_content}</span>
            <span>·</span>
            <time datetime="P2D">2일전</time>
          </div>
        </div>
      </div>);
  }

  function getChats() {
    return result.map(item =>
      item.user_id === user_id ?
        <div className="chatByMe"><label>ME</label><div>{item.chat_content}</div></div>
        : <div className="ProfileImg"><img src="img/advertisement2.jpg" alt="프로필사진" ></img><div className="chatByFriend"><label>{item.user_id}</label><div >{item.chat_content}</div></div></div>);
  }
  return (
    <div className="ChatPage"> 
      <div className="contactList">
        <div className="contacts">
          {getContacts()}
        </div>
      </div>
      <div className="chatList">
        <div className="chats">
          {getChats()}
        </div>
        <div className="chatWindow">
          <input type="text" onChange={onChange} value={text} placeholder="입력하세요"></input>
          <Button onClick={onReset}>보내기</Button>
        </div>
      </div>
    </div>
  );
}





export default ChatPage;