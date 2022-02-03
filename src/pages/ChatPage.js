import "../style/ChatPage.css";

// 연락처 목록
const contact = {
  user: ["HJ", "WJ", "KT", "SW"],
  date: new Date()
};

const chats = 
  {
    id: 1,
    name: 'HJ',
    content: [{
      talk: '완전 재밌어',
      isMe: true,
      date: '2022-02-02-17:06'
    },
    {
      talk: '리액트 최고임',
      isMe: true,
      date: '2022-02-02-17:07'
    },
    {
      talk: '행복해',
      isMe: true,
      date: '2022-02-02-17:18'
      },
      {
        talk: '완전 인정',
        isMe: false,
        date: '2022-02-02-17:10'
      },
      {
        talk: '짱 재밌더라',
        isMe: false,
        date: '2022-02-02-17:11'
      },
      {
        talk: '뭘 좀 아네 ㅎ',
        isMe: false,
        date: '2022-02-02-17:20'
      }
    ],
  };


function ChatPage() {
  return (
    <div className="ChatPage"> 
      <div className="contactList">
        <div className="contacts">
          {getContacts()}
        </div>
      </div>
      <div className="chatList">
        <div className="chats">
          { getChats() }
        </div>
        <div className="chatWindow">
          <input type="text" placeholder="입력하세요"></input>
        </div>
      </div>
    </div>
  );

}



// 연락처 불러오기
function getContacts() {
  return contact.user.map(user => <div className="contact">
    <div>{user}</div><div>1일전</div>
  </div>);
}

function getChats() {
  return chats.content.map(chat => chat.isMe ? <div className="chatByMe"><label>ME</label><div>{chat.talk}</div></div>
    : <div className="chatByFriend"><label>{chats.name}</label><div>{chat.talk}</div></div>)
}


export default ChatPage;