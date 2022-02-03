import '../style/Main.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';



function MainPage() {
  return (
    <div className="MainPage">
        <div className="mainLeft">
        <img src="img/advertisement1.jpg" alt="광고 이미지"/>
          <br/>
          <img src="img/advertisement2.jpg" alt="광고 이미지"/>
        </div>
        <div className="mainMid">
          <h5>인기 게시물</h5>
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
          <div className='board'>
            게시글
          </div>


        </div>

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
      </div>
  );
}

export default MainPage;