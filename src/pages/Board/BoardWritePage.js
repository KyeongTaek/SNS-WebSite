import "./Board.scss";
import ImageUploadBox from "./ImageUploadBox";
import Swal from 'sweetalert2'
import {
  InputGroup,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { call } from "../../Services/BoardService";
function BoardWritePage() {
  const [title, setTitle] = useState("test");
  const [content, setContent] = useState("test");
  const [data, setData] = useState({});

  useEffect(() => {
    if(Object.keys(data).length === 0){
      console.log("null")
    }
    else{
      console.log("not null")
      console.log(data)
      call("/board/register", "POST", data).then((response)=>{
        console.log(response);
      Swal.fire('게시글 작성 완료').then(result =>{window.location.href="/my"})
      })
    }
    
  }, [data])
  
  
  const register = ()=>{
    setData({"post_title" : title, "post_content" : content});
  }


  return (
    <div className="BoardPage">
      <div className="row">
        <div className="col-md-9">
          <h1>게시글 작성</h1>
        </div>
        <div className="col-md-3">
          <button className="boardButton">꾸미기 설정</button>
        </div>
      </div>
      <div className="container" id="container1">
        <ImageUploadBox />
        <FloatingLabel controlId="floatingTextarea1" label="제목 입력창입니다.">
          <Form.Control
            onChange={(e)=>{setTitle(e.target.value)}}
            placeholder="Leave a comment here"
            style={{ height: "50px" }}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="입력창입니다.">
          <Form.Control
            onChange={(e)=>{setContent(e.target.value)}}
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "200px" }}
          />
        </FloatingLabel>

        <InputGroup className="mb-3" size="lg">
          <button type="submit" className="boardBtn" onClick={() =>{register()}}>
            게시글 등록
          </button>
        </InputGroup>
      </div>
    </div>
  );
}

export default BoardWritePage;
