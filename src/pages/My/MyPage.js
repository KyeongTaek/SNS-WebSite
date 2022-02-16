import "./MyPage.scss";
import { useState } from "react";
import FollowerModal from "./FollowerModal";
import FollowModal from "./FollowModal";
import Post from "./Post";
import CommentPost from "./CommentPost";
import ScrapPost from "./ScrapPost";
import { Nav } from "react-bootstrap";
function MyPage() {
  const [FollowerModalOn, setFollowerModalOn] = useState(false);
  const [FollowModalOn, setFollowModalOn] = useState(false);

 let [Tap, setTap] = useState(0);

  function TabContent(props) {
    if (props.Tap === 0) {
      return <Post />;
    } else if (props.Tap === 1) {
      return <CommentPost />;
    } else if (props.Tap === 2) {
      return <ScrapPost />;
    }
  }
  return (
    <div className="MyPage">
      <FollowerModal
        show={FollowerModalOn}
        onHide={() => setFollowerModalOn(false)}
      />
      <FollowModal
        show={FollowModalOn}
        onHide={() => setFollowModalOn(false)}
      />
      <div className="container">
        <div className="profile">
          <div className="profile-image">
            <img src="https://pbs.twimg.com/media/EZHSXZ_UcAIIDtm.jpg" alt="" />
          </div>

          <div className="profile-user-settings">
            <h1 className="profile-user-name">Corona</h1>

            <button className="btn profile-edit-btn">프로필 편집</button>

            <button
              className="btn profile-settings-btn"
              aria-label="profile settings"
            >
              <i className="fas fa-cog" aria-hidden="true"></i>
            </button>
          </div>

          <div className="profile-stats">
            <ul>
              <li>
                <span className="profile-stat-count">게시글</span> N
              </li>
              <li>
                <span
                  className="profile-stat-count"
                  onClick={() => setFollowModalOn(true)}
                >
                  팔로우
                </span>{" "}
                N
              </li>
              <li>
                <span
                  className="profile-stat-count"
                  onClick={() => setFollowerModalOn(true)}
                >
                  팔로워
                </span>{" "}
                N
              </li>
            </ul>
          </div>

          <div className="profile-bio">
            <p>
              <span className="profile-real-name">
                팔로우 팔로워 클릭하면 modal 출력
              </span>{" "}
              Hello World! 📷✈️🏕️
            </p>
          </div>
        </div>
        <Nav
          className="justify-content-center "
          variant="tabs"
          defaultActiveKey="link-0"
        >
          <Nav.Item>
            <Nav.Link
              eventKey="link-0"
              onClick={() => {
                setTap(0);
              }}
            >
              게시물
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => {
                setTap(1);
              }}
            >
              댓글 단 게시물
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              onClick={() => {
                setTap(2);
              }}
            >
              스크랩
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent Tap={Tap} />
        <div className="loader"></div>
      </div>
      {/* <!-- End of container --> */}
    </div>
  );
}

export default MyPage;