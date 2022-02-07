import "./NotificationPage.css";
import { ListGroupItem } from "react-bootstrap";

function NotificationPage() {
    return (
      <div className="NotificationPage">
          <div className="notiList">
            <label className="title">알림 목록</label>
            <ul class="list-group list-group-flush">
              {getNotification()}
            </ul>
          </div>
      </div>
    );
  }
  
const notifications = [
  {
    name: 'HJ',
    profile: 'img/advertisement1.jpg',
    content: [{
      noti: ' 님이 좋아요를 눌렀습니다',
      date: '2022-02-02-17:06'
    },
    {
      noti: ' 님이 댓글을 달았습니다.',
      content: '뭐야뭐야~~ 너무 이쁘자너~~😍',
      date: '2022-02-02-18:06'
    }
    ]
  },
  {
    name: 'WJ',
    profile: 'img/advertisement2.jpg',
    content: [{
      noti: ' 님이 좋아요를 눌렀습니다',
      date: '2022-02-03-17:06'
    },
    {
      noti: ' 님이 댓글을 달았습니다.',
      content: '퍼가요~',
      date: '2022-02-03-17:06'
    }]
  }
]


function getNotification() {
  return notifications.map(notificaiton => notificaiton.content.map(
    item => <ListGroupItem>
      <div className="notiContainer">
        <div className="userProfile">
          <img src={notificaiton.profile} alt='profile'></img>
        </div>
        <div className="notiMessage">
          <div className="notiKinds">
            <label>{notificaiton.name}</label>{item.noti}
          </div>
          <div className="notiContents">{item.content}</div>
        </div>
      </div>
    </ListGroupItem>
  )
  );
}


  export default NotificationPage;