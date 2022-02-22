import CModal from "./CModal";
import { useEffect, useState } from "react";
import { call } from "../../Services/BoardService";
function Post() {
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState([]);
  const activeModal = () => {
    setShowModal((open) => !open);
    // document.body.style.overflow = "hidden";
  };
  useEffect(() => {
    call("/board/list", "GET", null).then((response) => {
      console.log(response);
      setPost(response);
    });
  }, []);
  function postList(post) {
    return (
      <div className="gallery">
        {post.map((element) => (
          <div className="gallery-item" tabindex="0">
            <img
              src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />

            <div className="gallery-item-info" onClick={activeModal}>
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true"></i>{" "}
                  {element.post_like}
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true"></i> 5
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <CModal showModal={showModal} setShowModal={setShowModal} />
      {postList(post)}
    </div>
  );
}

export default Post;
