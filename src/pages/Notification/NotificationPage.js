import "./NotificationPage.scss";
import { ListGroupItem } from "react-bootstrap";
import { useState, useEffect } from "react";
import { call } from "../../Services/UserService";
import Swal from 'sweetalert2'

function NotificationPage() {
  const [datas, setDatas] = useState([]);
  const [reload, setReload] = useState();
  async function fetchData(){
    await call("/notice/noticeList", "GET", null).then((response) =>
    setDatas(response))
}
  useEffect(() => {
    
    fetchData();
    
  },[reload]);

    return (
      <div className="NotificationPage">
          <div className="notiList">
            <label className="title">알림 목록</label>
            <ul className="list-group list-group-flush">
              {getNotification(datas, fetchData,reload, setReload)}
            </ul>
          </div>
      </div>
    );
  }
  
// const notifications = [
//   {
//     name: 'HJ',
//     profile: 'img/advertisement1.jpg',
//     content: [{
//       noti: ' 님이 좋아요를 눌렀습니다',
//       date: '2022-02-02-17:06'
//     },
//     {
//       noti: ' 님이 댓글을 달았습니다.',
//       content: '뭐야뭐야~~ 너무 이쁘자너~~😍',
//       date: '2022-02-02-18:06'
//     }
//     ]
//   },
//   {
//     name: 'WJ',
//     profile: 'img/advertisement2.jpg',
//     content: [{
//       noti: ' 님이 좋아요를 눌렀습니다',
//       date: '2022-02-03-17:06'
//     },
//     {
//       noti: ' 님이 댓글을 달았습니다.',
//       content: '퍼가요~',
//       date: '2022-02-03-17:06'
//     }]
//   }
// ]

function getNotification(datas, fetchData, reload, setReload) {

  const followerAnswer =(request, answer)=>{
    console.log(request);
    call("/user/followAccept", "POST", {"user_id" : request.sender_id, "friend_id" :  request.user_id, "friend_num" : answer})
    .then((response)=>{
      console.log(response);
    })
    fetchData();

    setReload({...reload});
   
    if(answer ===1){
      Swal.fire(request.sender_id + '님의 친구 신청을 수락 하셨습니다.').then(result =>{})
    }
    else{
      Swal.fire(request.sender_id + '님의 친구 신청을 거절 하셨습니다.').then(result =>{})

    }

  }
  console.log(datas);
  return datas.map(data => 
    {
      return(
      
    <ListGroupItem key={data.notice_id}>
      <div className="notiContainer">
        <div className="userProfile">
          <img src='img/advertisement1.jpg' alt='profile'></img>
        </div>
        <div className="notiMessage">
        {
          data.noticeSet[0]==="FOLLOW_NOTICE"?
          <div className="notiKinds">
            <label>{data.sender_id}</label>님이
            
              <div> 팔로우를 신청했습니다.</div>
              
            {data.friend_status === 2
          ?<div className="friendtext">
              <h5>친구 신청을 거절하셨습니다.</h5>
          </div>
          :data.friend_status === 1?
          <div className="friendtext">
              <h5>친구 신청을 수락하셨습니다.</h5>
          </div>
          :null
          }
            <div className="isFriendBtn">
                <button type="submit" onClick={()=>{
                  if(data.friend_status !== 1){
                    followerAnswer(data, 1);
                  }
                  else{
                    Swal.fire('이미 수락 하셨습니다.').then(result =>{})
                  }
                  }}>수락</button>
                <button type="submit" onClick={()=>{
                  if(data.friend_status !== 2){
                    followerAnswer(data, 2)
                  }
                  else{
                    Swal.fire('이미 거절 하셨습니다.').then(result =>{})
                  }
                  }}>거절</button>
            </div>
         
          </div>
              :null
            }

          <div className="notiContents"></div>
          
        </div>
      </div>
    </ListGroupItem>
   )
  }
  );
}


  export default NotificationPage;