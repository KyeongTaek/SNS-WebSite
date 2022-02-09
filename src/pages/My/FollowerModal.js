import { Modal, Button, ListGroup } from "react-bootstrap";
const FollowerModal = ({ show, onHide }) => {
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
        <div className="search">
          <div className="searchFrame">
            <input
              type="text"
              id="searchContent"
              name="searchContent"
              placeholder="search..."
            />
            <button className="img-button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
        <ListGroup as="ol" numbered>
          <ListGroup.Item as="li" className="d-flex bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt=""></img>
              </div>
            </div>
            <div className="me-auto">사용자 이름</div>

            <Button>삭제</Button>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt=""></img>
              </div>
            </div>
            <div className="me-auto">사용자 이름</div>

            <Button>삭제</Button>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt=""></img>
              </div>
            </div>
            <div className="me-auto">사용자 이름</div>

            <Button>삭제</Button>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt=""></img>
              </div>
            </div>
            <div className="me-auto">사용자 이름</div>

            <Button>삭제</Button>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt=""></img>
              </div>
            </div>
            <div className="me-auto">사용자 이름</div>

            <Button>삭제</Button>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt=""></img>
              </div>
            </div>
            <div className="me-auto">사용자 이름</div>

            <Button>삭제</Button>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt=""></img>
              </div>
            </div>
            <div className="me-auto">사용자 이름</div>

            <Button>삭제</Button>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="d-flex bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <div className="circleBox">
                <img src="img/advertisement1.jpg" alt=""></img>
              </div>
            </div>
            <div className="me-auto">사용자 이름</div>

            <Button>삭제</Button>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FollowerModal;
