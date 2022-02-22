import { Modal, Button, ListGroup } from "react-bootstrap";
import "./FModal.scss";
import { useEffect, useState } from "react";
import { call } from "../../Services/BoardService";

const FollowerModal = ({ show, onHide }) => {
  const [follower, setFollower] = useState([]);
  useEffect(() => {
    call("/user/follower", "GET", null).then((response) => {
      console.log(response);
      setFollower(response);
    });
  }, []);
  function followerList(follower) {
    return (
      <ListGroup as="ol" numbered>
        {follower.map((element) => (
          <ListGroup.Item
            as="li"
            className="d-flex bd-highlight mb-3"
            key={element.user_id}
          >
            <div className="p-2 bd-highlight">
              <div className="modal_circleBox">
                <img src="img/advertisement1.jpg" alt=""></img>
              </div>
            </div>
            <div className="me-auto">{element.user_id}</div>

            <Button>삭제</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">팔로워</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal_search">
          <div className="modal_searchFrame">
            <input
              type="text"
              id="modal_searchContent2"
              name="searchContent"
              placeholder="search..."
            />
            <button className="modal_img-button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
        {followerList(follower)}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FollowerModal;
