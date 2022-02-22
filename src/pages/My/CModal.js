import { useRef, useCallback, useEffect, useState } from "react";
import "./CModal.scss";
import { call } from "../../Services/BoardService";
function CModal({ showModal, setShowModal, post_id }) {
  const modalRef = useRef();
  const [postContent, setPostConetent] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [userId, setUserId] = useState("");

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      document.body.style.overflow = "unset";
    }
  };

  const closeKey = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        document.body.style.overflow = "unset";
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeKey);
    return () => document.removeEventListener("keydown", closeKey);
  }, [closeKey]);
  useEffect(() => {
    function fetchData() {
      console.log(post_id);
      call("/board/read", "POST", ({"post_id":post_id})).then((response) => {
        console.log(response);
        setPostTitle(response.post_title);
        setPostConetent(response.post_content);
        setUserId(response.user_id);
      });
    }
    fetchData();
  });
  if (!showModal) return null;
  return (
    <div id="modal_box" ref={modalRef} onClick={closeModal}>
      <div className="modal_contents">
        {/* <button
          className="modal_close_btn"
          onClick={() => setShowModal((modal) => !modal)}
        >
          ❌
        </button> */}
        <div className="modal_left">
          <img
            src="https://images.velog.io/images/devgosunman/post/b603df22-e812-494d-b1b9-562d56e020da/test.jpg"
            alt=""
          />
        </div>
        <div className="modal_right">
          <div className="title">
            <div className="circleBox">
              <img src="img/advertisement1.jpg" alt=""></img>
            </div>
            <p>{postTitle}</p>
            <i className="fas fa-list fa-lg"></i>
          </div>
          <div className="customLine"></div>
          <div className="post_contents">
            <div className="customMargin"></div>
            <div className="title">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt=""></img>
              </div>
              <p>{userId}</p>
            </div>
            <div className="customMargin"></div>
            <p>{postContent}</p>
          </div>
          <div className="customLine"></div>
          <div className="contents">
            <i className="far fa-heart fa-2x"></i>
            <i className="far fa-comment fa-2x"></i>
            <i className="fab fa-telegram-plane fa-2x"></i>

            <i className="far fa-bookmark fa-2x book"></i>
            <p>
              admin 외 <b>15명</b>이 좋아합니다.
            </p>
            <p>{postContent}</p>
            <p>댓글 4개 보기</p>
            <p className="date">12월 24일</p>
          </div>
          <div className="comments">
            <i className="far fa-comment-dots fa-2x"></i>
            <input type="text" placeholder="댓글 달기"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CModal;
