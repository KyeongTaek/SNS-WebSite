import "./Board.scss";
import ImageUploadBox from "./ImageUploadBox";
import {
  Dropdown,
  InputGroup,
  FormControl,
  DropdownButton,
  Form,
  FloatingLabel,
} from "react-bootstrap";
function BoardModifyPage() {
  return (
    <div className="BoardPage">
      <div className="row">
        <div className="col-md-9">
          <h1>게시글 수정</h1>
        </div>
        <div className="col-md-3">
          <button className="boardButton">꾸미기 설정</button>
        </div>
      </div>
      <div className="container" id="container1">
        <ImageUploadBox />
        <FloatingLabel controlId="floatingTextarea2" label="입력창입니다.">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "200px" }}
          />
        </FloatingLabel>

        <InputGroup className="mb-3" size="lg">
          <FormControl aria-label="large" placeholder="태그를 입력하세요." />

          <DropdownButton
            variant="none"
            title="테마선택"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item href="#">테마1</Dropdown.Item>
            <Dropdown.Item href="#">테마2</Dropdown.Item>
            <Dropdown.Item href="#">테마3</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">테마 적용 X</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </div>
    </div>
  );
}

export default BoardModifyPage;
