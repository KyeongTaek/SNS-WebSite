import Footer from './Footer'
import Navigation from './Navigation'
import { useLocation } from 'react-router-dom'

function Frame() {
    const location = useLocation();
    console.log(location.pathname)
    return (
      <div className="Frame">
         
         {/* Frame 페이지를 이름에 따라 보여줄지 안보여줄지 설정 */}
          {/* { location.pathname !== "/login" && location.pathname !=="/join" ?
          <div> <Footer /> <Navigation /> </div>: <div></div> } */}

        <Footer />
        <Navigation />
      </div>
    );
  }
  
  
  export default Frame;