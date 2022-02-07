import './Main.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';



function MainPage() {
  return (
    <div className="MainPage">
      
      {advertisement()}
      {mainSwiper()}
      {board()}
      {phone()}
      </div>
  );
}


function board(){
  return(
    <div className='boardFrame'>
      <div className='board'>
      <div className='title'>
        <div className='circleBox'>
          <img src='img/advertisement1.jpg' alt='board'></img>
        </div>
         <p>wjddjswo</p>
         <i class="fas fa-list fa-lg"></i>
      </div>
        <div className='picture'>
          <img src='img/board1.jpg' alt='board'></img>
        </div>

        <div className='contents'>
          <i className="far fa-heart fa-2x"></i> 
          <i className="far fa-comment fa-2x"></i>
          <i className="fab fa-telegram-plane fa-2x"></i>

          <i className="far fa-bookmark fa-2x book"></i>
          <p>admin 외 <b>15명</b>이 좋아합니다.</p>
          <p>추운 겨울 붕어빵이랑 오댕</p>
          <p>댓글 4개 보기</p>
          <p className='date'>12월 24일</p>

        </div>
        </div>
        <div className='comments'>
        <i class="far fa-comment-dots fa-2x"></i>
        <input type="text" placeholder='댓글 달기'></input>
        </div>
    </div>

  )
}

function advertisement(){
  return(
    <div className="mainLeft">
      <img src="img/advertisement1.jpg" alt="광고 이미지"/>
        <br/>
      <img src="img/advertisement2.jpg" alt="광고 이미지"/>
    </div>
  )
}

function mainSwiper(){
  return(
    <div className="mainMid">
          <h5 className='favorite-board'>인기 게시물</h5>
        <Swiper
        slidesPerView={2}
  
        pagination={{
          type:"fraction"
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <div className="slide">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="img/slide1.jpg" alt="슬라이드 이미지"/>

              </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                <br/>
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
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="img/slide1.jpg" alt="슬라이드 이미지"/>

              </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                <br/>
                <i className="fas fa-heart"></i> 123 &nbsp;&nbsp;&nbsp;
                <i className="fas fa-comment-alt"></i> 456
              </p>            </div>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="img/slide1.jpg" alt="슬라이드 이미지"/>

              </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                <br/>
                <i className="fas fa-heart"></i> 123 &nbsp;&nbsp;&nbsp;
                <i className="fas fa-comment-alt"></i> 456

              </p>            </div>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="img/slide1.jpg" alt="슬라이드 이미지"/>

              </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                <br/>
                <i className="fas fa-heart"></i> 123 &nbsp;&nbsp;&nbsp;
                <i className="fas fa-comment-alt"></i> 456

              </p>            </div>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">돌아가 없어</div>
        </SwiperSlide>
        
        
      </Swiper>
      </div>
  )
}
function phone(){
  return(
        <div className="mainRight">
          <h5>연락처</h5>


        <div className='chatFrame'>
          <div className='circleBox'>
            <img src="img/advertisement1.jpg" alt="채팅 이미지"/>
            
          </div>
          <h5 className='chatText'>adsf</h5>
          <p className='chatText2'>asds</p>
          <i className="far fa-envelope fa-2x"></i>

        </div><br/>
        <div className='chatFrame'>
          <div className='circleBox'>
            <img src="img/advertisement1.jpg" alt="채팅 이미지"/>
            
          </div>
          <h5 className='chatText'>adsf</h5>
          <p className='chatText2'>asds</p>
          <i className="far fa-envelope fa-2x"></i>

        </div><br/>
        <div className='chatFrame'>
          <div className='circleBox'>
            <img src="img/advertisement1.jpg" alt="채팅 이미지"/>
            
          </div>
          <h5 className='chatText'>adsf</h5>
          <p className='chatText2'>asds</p>

          <i className="far fa-envelope fa-2x"></i>

        </div><br/>


          
        </div>
  )
}
export default MainPage;