import "./Main.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { call } from "../../Services/UserService";

function MainPage() {
  const [chatUser, setChatUser] = useState([]);
  const [post, setPost] = useState([]);
  useEffect(() => {
    call("/chat/with", "GET", null).then((response) => setChatUser(response));
  }, []);

  useEffect(() => {
    call("/board/list", "GET", null).then((response1) => {
      console.log(response1);
      setPost(response1);
    });
  }, []);

  return (
    <div className="MainPage">
      {advertisement()}
      {mainSwiper()}
      {board(post)}
      {/* {board()} */}
      {phone(chatUser)}
    </div>
  );
}

function board(post) {
  return (
    <div>
      <div className="boardFrame">
        <div className="board">
          <div className="title">
            테스트 게시글
            <div className="titleLeft">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt="board"></img>
              </div>
            </div>
            <Dropdown className="userDropBtn" autoClose={true}>
              <Dropdown.Toggle id="dropdown-autoclose-false">
                <i className="fas fa-list fa-lg"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/my">상대방 프로필 보기</Dropdown.Item>
                <Dropdown.Item href="/report">게시물 신고하기</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="picture2">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper2"
            >
              <SwiperSlide>
                {" "}
                <img src="img/board1.jpg" alt="board"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img/board1.jpg" alt="board"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img/board1.jpg" alt="board"></img>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="contents">
            <i className="far fa-heart fa-2x"></i>
            <i className="far fa-comment fa-2x"></i>
            <i className="fab fa-telegram-plane fa-2x"></i>

            <i className="far fa-bookmark fa-2x book"></i>
            <p>
              admin 외 <b>15명</b>이 좋아합니다.
            </p>
            <p>겨울</p>
            <p>댓글 4개 보기</p>
            <p className="date">2022-1-15</p>
          </div>
        </div>
      <div className="comments">
        <i className="far fa-comment-dots fa-2x"></i>
        <input type="text" placeholder="댓글 달기"></input>
      </div>
    </div>
      {post.map((element) => (

    <div className="boardFrame">
        <div className="board">
          <div className="title">
            {element.post_title}
            <div className="titleLeft">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt="board"></img>
              </div>
            </div>
            <Dropdown className="userDropBtn" autoClose={true}>
              <Dropdown.Toggle id="dropdown-autoclose-false">
                <i className="fas fa-list fa-lg"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/my">상대방 프로필 보기</Dropdown.Item>
                <Dropdown.Item href="/report">게시물 신고하기</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="picture2">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper2"
            >
              <SwiperSlide>
                {" "}
                <img src="img/board1.jpg" alt="board"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img/board1.jpg" alt="board"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img/board1.jpg" alt="board"></img>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="contents">
            <i className="far fa-heart fa-2x"></i>
            <i className="far fa-comment fa-2x"></i>
            <i className="fab fa-telegram-plane fa-2x"></i>

            <i className="far fa-bookmark fa-2x book"></i>
            <p>
              admin 외 <b>15명</b>이 좋아합니다.
            </p>
            <p>{element.post_content}</p>
            <p>댓글 4개 보기</p>
            <p className="date">{element.post_time}</p>
          </div>
        </div>
      <div className="comments">
        <i className="far fa-comment-dots fa-2x"></i>
        <input type="text" placeholder="댓글 달기"></input>
      </div>
    </div>
    ))}



    </div>
  );
}

function advertisement() {
  return (
    <div className="mainLeft">
      <img src="img/advertisement1.jpg" alt="광고 이미지" />
      <br />
      <img src="img/advertisement2.jpg" alt="광고 이미지" />
    </div>
  );
}

function mainSwiper() {
  return (
    <div className="mainMid">
      <h5 className="favorite-board">인기 게시물</h5>
      <Swiper
        slidesPerView={2}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="img/slide1.jpg" alt="슬라이드 이미지" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br />
                  <i className="fas fa-heart"></i> 123 &nbsp;&nbsp;&nbsp;
                  <i className="fas fa-comment-alt"></i> 456
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="img/slide1.jpg" alt="슬라이드 이미지" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br />
                  <i className="fas fa-heart"></i> 123 &nbsp;&nbsp;&nbsp;
                  <i className="fas fa-comment-alt"></i> 456
                </p>{" "}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="img/slide1.jpg" alt="슬라이드 이미지" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br />
                  <i className="fas fa-heart"></i> 123 &nbsp;&nbsp;&nbsp;
                  <i className="fas fa-comment-alt"></i> 456
                </p>{" "}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="img/slide1.jpg" alt="슬라이드 이미지" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br />
                  <i className="fas fa-heart"></i> 123 &nbsp;&nbsp;&nbsp;
                  <i className="fas fa-comment-alt"></i> 456
                </p>{" "}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">돌아가 없어</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
function phone(chatUser) {
  return (
    <div className="mainRight">
      <h5>연락처</h5>

      {chatUser.map((element) => (
        <Link key={element.friend_id} to="/chat">
          <div className="chatFrame">
            <div className="circleBox">
              <img src="img/advertisement1.jpg" alt="채팅 이미지" />
            </div>
            <h5 className="chatText">{element.friend_id}</h5>
            <p className="chatText2">{element.chat_content}</p>
            <i className="far fa-envelope fa-2x"></i>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default MainPage;
